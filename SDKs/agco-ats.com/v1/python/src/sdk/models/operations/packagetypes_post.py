from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageTypesPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_package_type: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_package_type1: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_package_type2: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PackageTypesPostRequest:
    request: PackageTypesPostRequests = field(default=None)
    

@dataclass
class PackageTypesPostResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    package_types_post_200_application_json_string: Optional[str] = field(default=None)
    package_types_post_200_text_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
