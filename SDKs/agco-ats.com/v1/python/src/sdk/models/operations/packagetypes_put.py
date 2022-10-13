from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageTypesPutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageTypesPutRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_package_type: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_package_type1: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_package_type2: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PackageTypesPutRequest:
    path_params: PackageTypesPutPathParams = field(default=None)
    request: PackageTypesPutRequests = field(default=None)
    

@dataclass
class PackageTypesPutResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
