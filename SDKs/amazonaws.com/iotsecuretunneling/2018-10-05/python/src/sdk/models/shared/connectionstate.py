from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectionstatus_enum


@dataclass_json
@dataclass
class ConnectionState:
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[connectionstatus_enum.ConnectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
