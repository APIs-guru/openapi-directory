from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CompleteLayerUploadXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_COMPLETE_LAYER_UPLOAD = "SpencerFrontendService.CompleteLayerUpload"


@dataclass
class CompleteLayerUploadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CompleteLayerUploadXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteLayerUploadRequest:
    headers: CompleteLayerUploadHeaders = field(default=None)
    request: shared.CompleteLayerUploadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CompleteLayerUploadResponse:
    complete_layer_upload_response: Optional[shared.CompleteLayerUploadResponse] = field(default=None)
    content_type: str = field(default=None)
    empty_upload_exception: Optional[Any] = field(default=None)
    invalid_layer_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    layer_already_exists_exception: Optional[Any] = field(default=None)
    layer_part_too_small_exception: Optional[Any] = field(default=None)
    registry_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_command_exception: Optional[Any] = field(default=None)
    upload_not_found_exception: Optional[Any] = field(default=None)
    
