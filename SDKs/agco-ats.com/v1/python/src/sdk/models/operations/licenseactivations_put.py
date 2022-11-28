from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class LicenseActivationsPutPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicenseActivationsPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    dealer_db_models_license_activation_update: Optional[shared.DealerDbModelsLicenseActivationUpdate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_license_activation_update1: Optional[shared.DealerDbModelsLicenseActivationUpdate] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_license_activation_update2: Optional[shared.DealerDbModelsLicenseActivationUpdate] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class LicenseActivationsPutRequest:
    path_params: LicenseActivationsPutPathParams = field()
    request: LicenseActivationsPutRequests = field()
    

@dataclass
class LicenseActivationsPutResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    dealer_db_models_license_activation: Optional[shared.DealerDbModelsLicenseActivation] = field(default=None)
    
