from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicenseActivationsPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    dealer_db_models_license_activation_create: Optional[shared.DealerDbModelsLicenseActivationCreate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_license_activation_create1: Optional[shared.DealerDbModelsLicenseActivationCreate] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_license_activation_create2: Optional[shared.DealerDbModelsLicenseActivationCreate] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class LicenseActivationsPostRequest:
    request: LicenseActivationsPostRequests = field()
    

@dataclass
class LicenseActivationsPostResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    dealer_db_models_license_activation: Optional[shared.DealerDbModelsLicenseActivation] = field(default=None)
    
