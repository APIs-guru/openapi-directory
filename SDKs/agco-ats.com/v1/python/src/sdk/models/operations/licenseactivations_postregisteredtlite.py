from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicenseActivationsPostRegisterEdtLiteRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    dealer_db_models_edt_lite_registration: Optional[shared.DealerDbModelsEdtLiteRegistration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_edt_lite_registration1: Optional[shared.DealerDbModelsEdtLiteRegistration] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_edt_lite_registration2: Optional[shared.DealerDbModelsEdtLiteRegistration] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class LicenseActivationsPostRegisterEdtLiteRequest:
    request: LicenseActivationsPostRegisterEdtLiteRequests = field()
    

@dataclass
class LicenseActivationsPostRegisterEdtLiteResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    license_activations_post_register_edt_lite_200_application_json_boolean: Optional[bool] = field(default=None)
    license_activations_post_register_edt_lite_200_text_json_boolean: Optional[bool] = field(default=None)
    
