from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VouchersPutPathParams:
    voucher_code: str = field(default=None, metadata={'path_param': { 'field_name': 'VoucherCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class VouchersPutRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    dealer_db_models_voucher: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_voucher1: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_voucher2: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class VouchersPutRequest:
    path_params: VouchersPutPathParams = field(default=None)
    request: VouchersPutRequests = field(default=None)
    

@dataclass
class VouchersPutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
