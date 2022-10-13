from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutPartnerEventsRequestEntry:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Detail' }})
    detail_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetailType' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
