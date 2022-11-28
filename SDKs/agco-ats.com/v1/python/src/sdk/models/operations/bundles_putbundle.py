from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class BundlesPutBundlePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class BundlesPutBundleRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_bundle: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_bundle1: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_bundle2: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class BundlesPutBundleRequest:
    path_params: BundlesPutBundlePathParams = field()
    request: BundlesPutBundleRequests = field()
    

@dataclass
class BundlesPutBundleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
