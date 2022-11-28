from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConnectionScheduleTimeUnitEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"
    WEEKS = "weeks"
    MONTHS = "months"


@dataclass_json
@dataclass
class ConnectionSchedule:
    r"""ConnectionSchedule
    if null, then no schedule is set.
    """
    
    time_unit: ConnectionScheduleTimeUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnit') }})
    units: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    
