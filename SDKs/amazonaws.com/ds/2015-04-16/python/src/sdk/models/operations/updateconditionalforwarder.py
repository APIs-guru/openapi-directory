from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateConditionalForwarderXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_UPDATE_CONDITIONAL_FORWARDER = "DirectoryService_20150416.UpdateConditionalForwarder"


@dataclass
class UpdateConditionalForwarderHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdateConditionalForwarderXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConditionalForwarderRequest:
    headers: UpdateConditionalForwarderHeaders = field(default=None)
    request: shared.UpdateConditionalForwarderRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateConditionalForwarderResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    entity_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    update_conditional_forwarder_result: Optional[dict[str, Any]] = field(default=None)
    
