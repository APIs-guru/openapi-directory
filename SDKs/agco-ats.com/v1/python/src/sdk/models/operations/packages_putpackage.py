from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackagesPutPackagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesPutPackageRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_package: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_package1: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_package2: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PackagesPutPackageRequest:
    path_params: PackagesPutPackagePathParams = field(default=None)
    request: PackagesPutPackageRequests = field(default=None)
    

@dataclass
class PackagesPutPackageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
