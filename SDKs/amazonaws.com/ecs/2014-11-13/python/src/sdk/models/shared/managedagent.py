from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import managedagentname_enum


@dataclass_json
@dataclass
class ManagedAgent:
    last_started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStartedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatus' }})
    name: Optional[managedagentname_enum.ManagedAgentNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
