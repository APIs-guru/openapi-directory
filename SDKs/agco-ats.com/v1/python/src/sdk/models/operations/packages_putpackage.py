from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PackagesPutPackagePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackagesPutPackageRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_package: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_package1: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_package2: Optional[shared.UpdateSystemModelsPackage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PackagesPutPackageRequest:
    path_params: PackagesPutPackagePathParams = field()
    request: PackagesPutPackageRequests = field()
    

@dataclass
class PackagesPutPackageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
