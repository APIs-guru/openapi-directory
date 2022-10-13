from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class LicensesGetStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    ALL = "All"


@dataclass
class LicensesGetQueryParams:
    dealer_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DealerCode', 'style': 'form', 'explode': True }})
    status: Optional[LicensesGetStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    voucher_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VoucherCode', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class LicensesGetRequest:
    query_params: LicensesGetQueryParams = field(default=None)
    

@dataclass
class LicensesGetResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_dealer_db_models_license_: Optional[shared.APIPagedResponseDealerDbModelsLicense] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
