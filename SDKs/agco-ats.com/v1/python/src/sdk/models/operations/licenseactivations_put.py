from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicenseActivationsPutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicenseActivationsPutRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    dealer_db_models_license_activation_update: Optional[shared.DealerDbModelsLicenseActivationUpdate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_license_activation_update1: Optional[shared.DealerDbModelsLicenseActivationUpdate] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_license_activation_update2: Optional[shared.DealerDbModelsLicenseActivationUpdate] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class LicenseActivationsPutRequest:
    path_params: LicenseActivationsPutPathParams = field(default=None)
    request: LicenseActivationsPutRequests = field(default=None)
    

@dataclass
class LicenseActivationsPutResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    dealer_db_models_license_activation: Optional[shared.DealerDbModelsLicenseActivation] = field(default=None)
    status_code: int = field(default=None)
    
