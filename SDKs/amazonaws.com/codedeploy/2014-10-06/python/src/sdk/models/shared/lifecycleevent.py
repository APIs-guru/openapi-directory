from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LifecycleEvent:
    r"""LifecycleEvent
    Information about a deployment lifecycle event.
    """
    
    diagnostics: Optional[Diagnostics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnostics') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lifecycle_event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleEventName') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[LifecycleEventStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
