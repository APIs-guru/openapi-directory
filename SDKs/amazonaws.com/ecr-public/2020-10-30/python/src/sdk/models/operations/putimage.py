from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutImageXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_PUT_IMAGE = "SpencerFrontendService.PutImage"


@dataclass
class PutImageHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutImageXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

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
    layers_not_found_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    put_image_response: Optional[shared.PutImageResponse] = field(default=None)
    referenced_images_not_found_exception: Optional[Any] = field(default=None)
    registry_not_found_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_command_exception: Optional[Any] = field(default=None)
    
