from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import behavior
from . import metricvalue
from . import violationeventadditionalinfo


@dataclass_json
@dataclass
class ActiveViolation:
    behavior: Optional[behavior.Behavior] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behavior' }})
    last_violation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastViolationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_violation_value: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastViolationValue' }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileName' }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    violation_event_additional_info: Optional[violationeventadditionalinfo.ViolationEventAdditionalInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationEventAdditionalInfo' }})
    violation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationId' }})
    violation_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
