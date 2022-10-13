from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetDownloadURLForLayerXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_DOWNLOAD_URL_FOR_LAYER = "AmazonEC2ContainerRegistry_V20150921.GetDownloadUrlForLayer"


@dataclass
class GetDownloadURLForLayerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetDownloadURLForLayerXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetDownloadURLForLayerRequest:
    headers: GetDownloadURLForLayerHeaders = field(default=None)
    request: shared.GetDownloadURLForLayerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDownloadURLForLayerResponse:
    content_type: str = field(default=None)
    get_download_url_for_layer_response: Optional[shared.GetDownloadURLForLayerResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    layer_inaccessible_exception: Optional[Any] = field(default=None)
    layers_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
