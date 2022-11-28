from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VouchersPutPathParams:
    voucher_code: str = field(metadata={'path_param': { 'field_name': 'VoucherCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class VouchersPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    dealer_db_models_voucher: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_voucher1: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_voucher2: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class VouchersPutRequest:
    path_params: VouchersPutPathParams = field()
    request: VouchersPutRequests = field()
    

@dataclass
class VouchersPutResponse:
    content_type: str = field()
    status_code: int = field()
    
