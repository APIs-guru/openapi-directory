from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicenseActivationsPutConfirmPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicenseActivationsPutConfirmRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    dealer_db_models_license_activation_confirm: Optional[shared.DealerDbModelsLicenseActivationConfirm] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_license_activation_confirm1: Optional[shared.DealerDbModelsLicenseActivationConfirm] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_license_activation_confirm2: Optional[shared.DealerDbModelsLicenseActivationConfirm] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class LicenseActivationsPutConfirmRequest:
    path_params: LicenseActivationsPutConfirmPathParams = field()
    request: LicenseActivationsPutConfirmRequests = field()
    

@dataclass
class LicenseActivationsPutConfirmResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
