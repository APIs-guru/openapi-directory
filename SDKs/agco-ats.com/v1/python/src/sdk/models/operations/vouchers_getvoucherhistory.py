from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VouchersGetVoucherHistoryPathParams:
    voucher_code: str = field(default=None, metadata={'path_param': { 'field_name': 'VoucherCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class VouchersGetVoucherHistoryQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class VouchersGetVoucherHistoryRequest:
    path_params: VouchersGetVoucherHistoryPathParams = field(default=None)
    query_params: VouchersGetVoucherHistoryQueryParams = field(default=None)
    

@dataclass
class VouchersGetVoucherHistoryResponse:
    api_paged_response_dealer_db_models_voucher_history_: Optional[shared.APIPagedResponseDealerDbModelsVoucherHistory] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
