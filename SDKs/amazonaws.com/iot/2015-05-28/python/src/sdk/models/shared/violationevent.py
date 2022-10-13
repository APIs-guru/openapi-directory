from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import behavior
from . import metricvalue
from . import violationeventadditionalinfo
from . import violationeventtype_enum


@dataclass_json
@dataclass
class ViolationEvent:
    behavior: Optional[behavior.Behavior] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behavior' }})
    metric_value: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValue' }})
    security_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfileName' }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    violation_event_additional_info: Optional[violationeventadditionalinfo.ViolationEventAdditionalInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationEventAdditionalInfo' }})
    violation_event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationEventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    violation_event_type: Optional[violationeventtype_enum.ViolationEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationEventType' }})
    violation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violationId' }})
    
