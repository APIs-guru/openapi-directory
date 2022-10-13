from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class InitiateLayerUploadXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_INITIATE_LAYER_UPLOAD = "SpencerFrontendService.InitiateLayerUpload"


@dataclass
class InitiateLayerUploadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: InitiateLayerUploadXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class InitiateLayerUploadRequest:
    headers: InitiateLayerUploadHeaders = field(default=None)
    request: shared.InitiateLayerUploadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InitiateLayerUploadResponse:
    content_type: str = field(default=None)
    initiate_layer_upload_response: Optional[shared.InitiateLayerUploadResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    registry_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_command_exception: Optional[Any] = field(default=None)
    
