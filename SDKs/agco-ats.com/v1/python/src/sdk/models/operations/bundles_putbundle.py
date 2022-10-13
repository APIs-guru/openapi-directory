from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BundlesPutBundlePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class BundlesPutBundleRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_bundle: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_bundle1: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_bundle2: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class BundlesPutBundleRequest:
    path_params: BundlesPutBundlePathParams = field(default=None)
    request: BundlesPutBundleRequests = field(default=None)
    

@dataclass
class BundlesPutBundleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
