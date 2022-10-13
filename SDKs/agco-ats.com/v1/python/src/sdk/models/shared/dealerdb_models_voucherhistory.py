from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DealerDbModelsVoucherHistoryTypeEnum(str, Enum):
    COMMERCIAL = "Commercial"
    INTERNAL = "Internal"
    TEMPORARY = "Temporary"
    RIGHT_TO_REPAIR = "RightToRepair"


@dataclass_json
@dataclass
class DealerDbModelsVoucherHistory:
    changed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dealer_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerCode' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deleted' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    license_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseTo' }})
    modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModifiedBy' }})
    order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderNumber' }})
    punched: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Punched' }})
    punched_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PunchedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Purpose' }})
    type: Optional[DealerDbModelsVoucherHistoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    voucher_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoucherCode' }})
    
