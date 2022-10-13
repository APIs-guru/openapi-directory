from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared

class VouchersGetDeletedEnum(str, Enum):
    NOT_DELETED = "NotDeleted"
    DELETED = "Deleted"
    ALL = "All"

class VouchersGetTypeEnum(str, Enum):
    COMMERCIAL = "Commercial"
    INTERNAL = "Internal"
    TEMPORARY = "Temporary"
    RIGHT_TO_REPAIR = "RightToRepair"


@dataclass
class VouchersGetQueryParams:
    created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'CreatedAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'CreatedBefore', 'style': 'form', 'explode': True }})
    dealer_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DealerCode', 'style': 'form', 'explode': True }})
    deleted: Optional[VouchersGetDeletedEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Deleted', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Email', 'style': 'form', 'explode': True }})
    expiration_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ExpirationAfter', 'style': 'form', 'explode': True }})
    expiration_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ExpirationBefore', 'style': 'form', 'explode': True }})
    license_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LicenseTo', 'style': 'form', 'explode': True }})
    modified_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ModifiedBy', 'style': 'form', 'explode': True }})
    order_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'OrderNumber', 'style': 'form', 'explode': True }})
    punched: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Punched', 'style': 'form', 'explode': True }})
    punched_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'PunchedAfter', 'style': 'form', 'explode': True }})
    punched_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'PunchedBefore', 'style': 'form', 'explode': True }})
    purpose: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Purpose', 'style': 'form', 'explode': True }})
    type: Optional[VouchersGetTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class VouchersGetRequest:
    query_params: VouchersGetQueryParams = field(default=None)
    

@dataclass
class VouchersGetResponse:
    api_paged_response_dealer_db_models_voucher_: Optional[shared.APIPagedResponseDealerDbModelsVoucher] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
