from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VouchersGetVoucherHistoryPathParams:
    voucher_code: str = field(metadata={'path_param': { 'field_name': 'VoucherCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class VouchersGetVoucherHistoryQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class VouchersGetVoucherHistoryRequest:
    path_params: VouchersGetVoucherHistoryPathParams = field()
    query_params: VouchersGetVoucherHistoryQueryParams = field()
    

@dataclass
class VouchersGetVoucherHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    api_paged_response_dealer_db_models_voucher_history_: Optional[shared.APIPagedResponseDealerDbModelsVoucherHistory] = field(default=None)
    
