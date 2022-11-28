from dataclasses import dataclass, field



@dataclass
class VouchersDeletePathParams:
    voucher_code: str = field(metadata={'path_param': { 'field_name': 'VoucherCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class VouchersDeleteRequest:
    path_params: VouchersDeletePathParams = field()
    

@dataclass
class VouchersDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
