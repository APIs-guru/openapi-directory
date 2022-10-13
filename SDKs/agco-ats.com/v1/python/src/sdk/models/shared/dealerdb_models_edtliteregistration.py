from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DealerDbModelsEdtLiteRegistration:
    dealer_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerCode' }, 'form': { 'field_name': 'DealerCode' }})
    expiration_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'ExpirationDate' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceID' }, 'form': { 'field_name': 'InstanceID' }})
    voucher_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoucherCode' }, 'form': { 'field_name': 'VoucherCode' }})
    
