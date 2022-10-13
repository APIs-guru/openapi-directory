from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class VoucherHistoryGetVoucherHistoryQueryParams:
    changed_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ChangedAfter', 'style': 'form', 'explode': True }})
    changed_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ChangedBefore', 'style': 'form', 'explode': True }})
    voucher_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VoucherCode', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class VoucherHistoryGetVoucherHistoryRequest:
    query_params: VoucherHistoryGetVoucherHistoryQueryParams = field(default=None)
    

@dataclass
class VoucherHistoryGetVoucherHistoryResponse:
    api_paged_response_dealer_db_models_voucher_history_: Optional[shared.APIPagedResponseDealerDbModelsVoucherHistory] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
