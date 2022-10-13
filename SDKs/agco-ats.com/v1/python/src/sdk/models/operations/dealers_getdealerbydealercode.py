from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DealersGetDealerbyDealerCodePathParams:
    dealer_code: str = field(default=None, metadata={'path_param': { 'field_name': 'DealerCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class DealersGetDealerbyDealerCodeRequest:
    path_params: DealersGetDealerbyDealerCodePathParams = field(default=None)
    

@dataclass
class DealersGetDealerbyDealerCodeResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    dealer_db_models_dealer: Optional[shared.DealerDbModelsDealer] = field(default=None)
    status_code: int = field(default=None)
    
