from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicenseActivationsPutConfirmPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicenseActivationsPutConfirmRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    dealer_db_models_license_activation_confirm: Optional[shared.DealerDbModelsLicenseActivationConfirm] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_license_activation_confirm1: Optional[shared.DealerDbModelsLicenseActivationConfirm] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_license_activation_confirm2: Optional[shared.DealerDbModelsLicenseActivationConfirm] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class LicenseActivationsPutConfirmRequest:
    path_params: LicenseActivationsPutConfirmPathParams = field(default=None)
    request: LicenseActivationsPutConfirmRequests = field(default=None)
    

@dataclass
class LicenseActivationsPutConfirmResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
