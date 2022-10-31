from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DetachFromIndexHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_data_partition: str = field(default=None, metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DetachFromIndexRequestBodyIndexReference:
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Selector' }})
    

@dataclass_json
@dataclass
class DetachFromIndexRequestBodyTargetReference:
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Selector' }})
    

@dataclass_json
@dataclass
class DetachFromIndexRequestBody:
    index_reference: DetachFromIndexRequestBodyIndexReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexReference' }})
    target_reference: DetachFromIndexRequestBodyTargetReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetReference' }})
    

@dataclass
class DetachFromIndexRequest:
    headers: DetachFromIndexHeaders = field(default=None)
    request: DetachFromIndexRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DetachFromIndexResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    detach_from_index_response: Optional[shared.DetachFromIndexResponse] = field(default=None)
    directory_not_enabled_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_index_exception: Optional[Any] = field(default=None)
    object_already_detached_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    retryable_conflict_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
