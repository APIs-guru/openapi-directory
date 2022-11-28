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
class ViolationEvent:
    r"""ViolationEvent
    Information about a Device Defender security profile behavior violation.
    """
    
    behavior: Optional[Behavior] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behavior') }})
    metric_value: Optional[MetricValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValue') }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileName') }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    violation_event_additional_info: Optional[ViolationEventAdditionalInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventAdditionalInfo') }})
    violation_event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    violation_event_type: Optional[ViolationEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventType') }})
    violation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationId') }})
    
