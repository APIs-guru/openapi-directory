from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestGridSessionAction:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    request_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMethod' }})
    started: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
