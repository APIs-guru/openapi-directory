from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BundlesPostBundleRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_bundle: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_bundle1: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_bundle2: Optional[shared.UpdateSystemModelsBundle] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class BundlesPostBundleRequest:
    request: BundlesPostBundleRequests = field(default=None)
    

@dataclass
class BundlesPostBundleResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    bundles_post_bundle_200_application_json_string: Optional[str] = field(default=None)
    bundles_post_bundle_200_application_xml_string: Optional[str] = field(default=None)
    bundles_post_bundle_200_text_json_string: Optional[str] = field(default=None)
    bundles_post_bundle_200_text_xml_string: Optional[str] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
