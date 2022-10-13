from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AftermarketServicesGetUserStatusQueryParams:
    dealer_code: str = field(default=None, metadata={'query_param': { 'field_name': 'dealerCode', 'style': 'form', 'explode': True }})
    voucher_code: str = field(default=None, metadata={'query_param': { 'field_name': 'voucherCode', 'style': 'form', 'explode': True }})
    

@dataclass
class AftermarketServicesGetUserStatusRequest:
    query_params: AftermarketServicesGetUserStatusQueryParams = field(default=None)
    

@dataclass
class AftermarketServicesGetUserStatusResponse:
    agco_power_services_models_user_status: Optional[shared.AgcoPowerServicesModelsUserStatus] = field(default=None)
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
