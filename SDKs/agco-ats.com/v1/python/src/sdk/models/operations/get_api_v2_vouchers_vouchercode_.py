from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPIV2VouchersVoucherCodePathParams:
    voucher_code: str = field(metadata={'path_param': { 'field_name': 'VoucherCode', 'style': 'simple', 'explode': False }})
    
class GetAPIV2VouchersVoucherCodeDeletedEnum(str, Enum):
    NOT_DELETED = "NotDeleted"
    DELETED = "Deleted"
    ALL = "All"


@dataclass
class GetAPIV2VouchersVoucherCodeQueryParams:
    deleted: Optional[GetAPIV2VouchersVoucherCodeDeletedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Deleted', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV2VouchersVoucherCodeRequest:
    path_params: GetAPIV2VouchersVoucherCodePathParams = field()
    query_params: GetAPIV2VouchersVoucherCodeQueryParams = field()
    

@dataclass
class GetAPIV2VouchersVoucherCodeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    dealer_db_models_voucher: Optional[shared.DealerDbModelsVoucher] = field(default=None)
    
