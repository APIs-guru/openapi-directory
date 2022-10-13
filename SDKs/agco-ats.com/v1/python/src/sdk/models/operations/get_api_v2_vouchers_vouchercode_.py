from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetAPIV2VouchersVoucherCodePathParams:
    voucher_code: str = field(default=None, metadata={'path_param': { 'field_name': 'VoucherCode', 'style': 'simple', 'explode': False }})
    
class GetAPIV2VouchersVoucherCodeDeletedEnum(str, Enum):
    NOT_DELETED = "NotDeleted"
    DELETED = "Deleted"
    ALL = "All"


@dataclass
class GetAPIV2VouchersVoucherCodeQueryParams:
    deleted: Optional[GetAPIV2VouchersVoucherCodeDeletedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Deleted', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV2VouchersVoucherCodeRequest:
    path_params: GetAPIV2VouchersVoucherCodePathParams = field(default=None)
    query_params: GetAPIV2VouchersVoucherCodeQueryParams = field(default=None)
    

@dataclass
class GetAPIV2VouchersVoucherCodeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    dealer_db_models_voucher: Optional[shared.DealerDbModelsVoucher] = field(default=None)
    status_code: int = field(default=None)
    
