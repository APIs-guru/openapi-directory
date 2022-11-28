from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PackageTypesPutPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageTypesPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_package_type: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_package_type1: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_package_type2: Optional[shared.UpdateSystemModelsPackageType] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PackageTypesPutRequest:
    path_params: PackageTypesPutPathParams = field()
    request: PackageTypesPutRequests = field()
    

@dataclass
class PackageTypesPutResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
