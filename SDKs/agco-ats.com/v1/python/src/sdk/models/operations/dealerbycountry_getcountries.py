from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DealerByCountryGetCountriesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class DealerByCountryGetCountriesRequest:
    query_params: DealerByCountryGetCountriesQueryParams = field(default=None)
    

@dataclass
class DealerByCountryGetCountriesResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_dealer_db_models_dealers_per_country_: Optional[shared.APIPagedResponseDealerDbModelsDealersPerCountry] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
