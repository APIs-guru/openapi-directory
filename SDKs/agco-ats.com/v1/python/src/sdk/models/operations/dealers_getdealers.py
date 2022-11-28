from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DealersGetDealersQueryParams:
    brand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Brand', 'style': 'form', 'explode': True }})
    dealer_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DealerName', 'style': 'form', 'explode': True }})
    shipping_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ShippingCountry', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class DealersGetDealersRequest:
    query_params: DealersGetDealersQueryParams = field()
    

@dataclass
class DealersGetDealersResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_dealer_db_models_dealer_: Optional[shared.APIPagedResponseDealerDbModelsDealer] = field(default=None)
    
