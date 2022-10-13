from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import identity


@dataclass_json
@dataclass
class GetConnectionResponse:
    connected_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    identity: Optional[identity.Identity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identity' }})
    last_active_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastActiveAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
