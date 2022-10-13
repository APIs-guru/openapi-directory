from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSystemModelsClient:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientID' }, 'form': { 'field_name': 'ClientID' }})
    last_checkin: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastCheckin', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'LastCheckin' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tag' }, 'form': { 'field_name': 'Tag' }})
    
