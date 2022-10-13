from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListCuratedEnvironmentImagesXAmzTargetEnum(str, Enum):
    CODE_BUILD_20161006_LIST_CURATED_ENVIRONMENT_IMAGES = "CodeBuild_20161006.ListCuratedEnvironmentImages"


@dataclass
class ListCuratedEnvironmentImagesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListCuratedEnvironmentImagesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListCuratedEnvironmentImagesRequest:
    headers: ListCuratedEnvironmentImagesHeaders = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListCuratedEnvironmentImagesResponse:
    content_type: str = field(default=None)
    list_curated_environment_images_output: Optional[shared.ListCuratedEnvironmentImagesOutput] = field(default=None)
    status_code: int = field(default=None)
    
