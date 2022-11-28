from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VouchersPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    dealer_db_models_voucher: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    dealer_db_models_voucher1: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    dealer_db_models_voucher2: Optional[shared.DealerDbModelsVoucher] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class VouchersPostRequest:
    request: VouchersPostRequests = field()
    

@dataclass
class VouchersPostResponse:
    content_type: str = field()
    status_code: int = field()
    vouchers_post_200_application_json_string: Optional[str] = field(default=None)
    vouchers_post_200_application_xml_string: Optional[str] = field(default=None)
    vouchers_post_200_text_json_string: Optional[str] = field(default=None)
    vouchers_post_200_text_xml_string: Optional[str] = field(default=None)
    
