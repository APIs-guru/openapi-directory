from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class ConnectionScheduleTimeUnitEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"
    WEEKS = "weeks"
    MONTHS = "months"


@dataclass_json
@dataclass
class ConnectionSchedule:
    time_unit: ConnectionScheduleTimeUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeUnit' }})
    units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'units' }})
    
