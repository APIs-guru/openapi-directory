from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AftermarketServicesGetUserStatusQueryParams:
    dealer_code: str = field(metadata={'query_param': { 'field_name': 'dealerCode', 'style': 'form', 'explode': True }})
    voucher_code: str = field(metadata={'query_param': { 'field_name': 'voucherCode', 'style': 'form', 'explode': True }})
    

@dataclass
class AftermarketServicesGetUserStatusRequest:
    query_params: AftermarketServicesGetUserStatusQueryParams = field()
    

@dataclass
class AftermarketServicesGetUserStatusResponse:
    content_type: str = field()
    status_code: int = field()
    agco_power_services_models_user_status: Optional[shared.AgcoPowerServicesModelsUserStatus] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
