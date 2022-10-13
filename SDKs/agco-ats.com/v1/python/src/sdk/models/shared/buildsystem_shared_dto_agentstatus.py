from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BuildSystemSharedDtoAgentStatus:
    last_status_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStatusUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'LastStatusUpdate' }})
    online: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Online' }, 'form': { 'field_name': 'Online' }})
    
