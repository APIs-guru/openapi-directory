from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageTypetoBundlesPostRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_package_type_i_dto_bundle: Optional[shared.UpdateSystemModelsPackageTypeIDtoBundle] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_package_type_i_dto_bundle1: Optional[shared.UpdateSystemModelsPackageTypeIDtoBundle] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_package_type_i_dto_bundle2: Optional[shared.UpdateSystemModelsPackageTypeIDtoBundle] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PackageTypetoBundlesPostRequest:
    request: PackageTypetoBundlesPostRequests = field(default=None)
    

@dataclass
class PackageTypetoBundlesPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
