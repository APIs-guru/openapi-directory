from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PackageTypetoBundlesPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_package_type_i_dto_bundle: Optional[shared.UpdateSystemModelsPackageTypeIDtoBundle] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_package_type_i_dto_bundle1: Optional[shared.UpdateSystemModelsPackageTypeIDtoBundle] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_package_type_i_dto_bundle2: Optional[shared.UpdateSystemModelsPackageTypeIDtoBundle] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PackageTypetoBundlesPutRequest:
    request: PackageTypetoBundlesPutRequests = field()
    

@dataclass
class PackageTypetoBundlesPutResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
