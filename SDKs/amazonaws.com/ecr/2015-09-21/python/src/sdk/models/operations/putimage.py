from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutImageXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_IMAGE = "AmazonEC2ContainerRegistry_V20150921.PutImage"


@dataclass
class PutImageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutImageXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutImageRequest:
    headers: PutImageHeaders = field(default=None)
    request: shared.PutImageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutImageResponse:
    content_type: str = field(default=None)
    image_already_exists_exception: Optional[Any] = field(default=None)
    image_digest_does_not_match_exception: Optional[Any] = field(default=None)
    image_tag_already_exists_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    kms_exception: Optional[Any] = field(default=None)
    layers_not_found_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    put_image_response: Optional[shared.PutImageResponse] = field(default=None)
    referenced_images_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
