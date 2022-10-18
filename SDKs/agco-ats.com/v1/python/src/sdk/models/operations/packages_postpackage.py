from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackagesPostPackageRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_package: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_package1: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_package2: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PackagesPostPackageRequest:
    request: PackagesPostPackageRequests = field(default=None)
    

@dataclass
class PackagesPostPackageResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    packages_post_package_200_application_json_string: Optional[str] = field(default=None)
    packages_post_package_200_text_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
