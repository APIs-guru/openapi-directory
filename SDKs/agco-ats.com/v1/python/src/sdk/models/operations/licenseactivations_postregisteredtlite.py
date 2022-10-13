from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicenseActivationsPostRegisterEdtLiteRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    dealer_db_models_edt_lite_registration: Optional[shared.DealerDbModelsEdtLiteRegistration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_edt_lite_registration1: Optional[shared.DealerDbModelsEdtLiteRegistration] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_edt_lite_registration2: Optional[shared.DealerDbModelsEdtLiteRegistration] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class LicenseActivationsPostRegisterEdtLiteRequest:
    request: LicenseActivationsPostRegisterEdtLiteRequests = field(default=None)
    

@dataclass
class LicenseActivationsPostRegisterEdtLiteResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    license_activations_post_register_edt_lite_200_application_json_boolean: Optional[bool] = field(default=None)
    license_activations_post_register_edt_lite_200_text_json_boolean: Optional[bool] = field(default=None)
    status_code: int = field(default=None)
    
