from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsAttributeValue:
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
