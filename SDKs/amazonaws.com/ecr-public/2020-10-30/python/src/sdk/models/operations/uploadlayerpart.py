from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UploadLayerPartXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_UPLOAD_LAYER_PART = "SpencerFrontendService.UploadLayerPart"


@dataclass
class UploadLayerPartHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UploadLayerPartXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UploadLayerPartRequest:
    headers: UploadLayerPartHeaders = field(default=None)
    request: shared.UploadLayerPartRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UploadLayerPartResponse:
    content_type: str = field(default=None)
    invalid_layer_part_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    registry_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_command_exception: Optional[Any] = field(default=None)
    upload_layer_part_response: Optional[shared.UploadLayerPartResponse] = field(default=None)
    upload_not_found_exception: Optional[Any] = field(default=None)
    
