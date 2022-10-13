from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransitionState:
    disabled_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledReason' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    last_changed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastChangedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_changed_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastChangedBy' }})
    
