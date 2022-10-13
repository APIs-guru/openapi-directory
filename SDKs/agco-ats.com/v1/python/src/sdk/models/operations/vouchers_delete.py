from dataclasses import dataclass, field



@dataclass
class VouchersDeletePathParams:
    voucher_code: str = field(default=None, metadata={'path_param': { 'field_name': 'VoucherCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class VouchersDeleteRequest:
    path_params: VouchersDeletePathParams = field(default=None)
    

@dataclass
class VouchersDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
