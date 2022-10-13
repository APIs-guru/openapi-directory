from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV2LicensesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV2LicensesIDRequest:
    path_params: GetAPIV2LicensesIDPathParams = field(default=None)
    

@dataclass
class GetAPIV2LicensesIDResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    dealer_db_models_license: Optional[shared.DealerDbModelsLicense] = field(default=None)
    status_code: int = field(default=None)
    
