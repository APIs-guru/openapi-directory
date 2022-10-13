from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Introspection:
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Features' }})
    issued_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UUID' }})
    
