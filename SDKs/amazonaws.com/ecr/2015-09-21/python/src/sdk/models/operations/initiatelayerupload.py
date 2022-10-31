from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class InitiateLayerUploadXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_INITIATE_LAYER_UPLOAD = "AmazonEC2ContainerRegistry_V20150921.InitiateLayerUpload"


@dataclass
class InitiateLayerUploadHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: InitiateLayerUploadXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class InitiateLayerUploadRequest:
    headers: InitiateLayerUploadHeaders = field(default=None)
    request: shared.InitiateLayerUploadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InitiateLayerUploadResponse:
    content_type: str = field(default=None)
    initiate_layer_upload_response: Optional[shared.InitiateLayerUploadResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    kms_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
