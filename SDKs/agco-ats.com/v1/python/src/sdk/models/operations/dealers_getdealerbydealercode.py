from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DealersGetDealerbyDealerCodePathParams:
    dealer_code: str = field(metadata={'path_param': { 'field_name': 'DealerCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class DealersGetDealerbyDealerCodeRequest:
    path_params: DealersGetDealerbyDealerCodePathParams = field()
    

@dataclass
class DealersGetDealerbyDealerCodeResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    dealer_db_models_dealer: Optional[shared.DealerDbModelsDealer] = field(default=None)
    
