from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileSystemSize:
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    value_in_ia: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueInIA' }})
    value_in_standard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueInStandard' }})
    
