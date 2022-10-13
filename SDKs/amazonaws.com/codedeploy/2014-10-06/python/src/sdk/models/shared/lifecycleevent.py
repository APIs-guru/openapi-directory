from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import diagnostics
from . import lifecycleeventstatus_enum


@dataclass_json
@dataclass
class LifecycleEvent:
    diagnostics: Optional[diagnostics.Diagnostics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnostics' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleEventName' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[lifecycleeventstatus_enum.LifecycleEventStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
