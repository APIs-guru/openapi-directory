from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateResourceCollectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateResourceCollectionRequestBodyActionEnum(str, Enum):
    ADD = "ADD"
    REMOVE = "REMOVE"


@dataclass_json
@dataclass
class UpdateResourceCollectionRequestBodyResourceCollection:
    cloud_formation: Optional[shared.UpdateCloudFormationCollectionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudFormation' }})
    

@dataclass_json
@dataclass
class UpdateResourceCollectionRequestBody:
    action: UpdateResourceCollectionRequestBodyActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    resource_collection: UpdateResourceCollectionRequestBodyResourceCollection = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    

@dataclass
class UpdateResourceCollectionRequest:
    headers: UpdateResourceCollectionHeaders = field(default=None)
    request: UpdateResourceCollectionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateResourceCollectionResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_resource_collection_response: Optional[dict[str, Any]] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
