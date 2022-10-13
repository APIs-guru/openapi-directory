from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransferData:
    accept_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reject_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reject_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejectReason' }})
    transfer_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transfer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferMessage' }})
    
