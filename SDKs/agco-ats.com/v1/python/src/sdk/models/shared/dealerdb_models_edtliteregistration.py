from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DealerDbModelsEdtLiteRegistration:
    r"""DealerDbModelsEdtLiteRegistration
    Registration for an EDT Lite
    """
    
    expiration_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'ExpirationDate' }})
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceID') }, 'form': { 'field_name': 'InstanceID' }})
    voucher_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoucherCode') }, 'form': { 'field_name': 'VoucherCode' }})
    dealer_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DealerCode') }, 'form': { 'field_name': 'DealerCode' }})
    
