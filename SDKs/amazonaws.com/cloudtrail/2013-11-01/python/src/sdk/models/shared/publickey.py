from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublicKey:
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fingerprint' }})
    validity_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidityEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validity_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidityStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
