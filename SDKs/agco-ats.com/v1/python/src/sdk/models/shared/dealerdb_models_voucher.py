from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DealerDbModelsVoucherTypeEnum(str, Enum):
    COMMERCIAL = "Commercial"
    INTERNAL = "Internal"
    TEMPORARY = "Temporary"
    RIGHT_TO_REPAIR = "RightToRepair"


@dataclass_json
@dataclass
class DealerDbModelsVoucher:
    r"""DealerDbModelsVoucher
    A voucher for EDT activation
    """
    
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'CreatedDate' }})
    dealer_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DealerCode') }, 'form': { 'field_name': 'DealerCode' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }, 'form': { 'field_name': 'Deleted' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }, 'form': { 'field_name': 'Email' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'ExpirationDate' }})
    license_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LicenseTo') }, 'form': { 'field_name': 'LicenseTo' }})
    modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModifiedBy') }, 'form': { 'field_name': 'ModifiedBy' }})
    order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderNumber') }, 'form': { 'field_name': 'OrderNumber' }})
    punched: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Punched') }, 'form': { 'field_name': 'Punched' }})
    punched_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PunchedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'PunchedDate' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Purpose') }, 'form': { 'field_name': 'Purpose' }})
    type: Optional[DealerDbModelsVoucherTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }, 'form': { 'field_name': 'Type' }})
    voucher_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoucherCode') }, 'form': { 'field_name': 'VoucherCode' }})
    
