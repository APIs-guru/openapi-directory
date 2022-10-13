from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timestamprange
from . import durationrange
from . import timestamprange
from . import timestamprange
from . import assessmentrunstate_enum


@dataclass_json
@dataclass
class AssessmentRunFilter:
    completion_time_range: Optional[timestamprange.TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTimeRange' }})
    duration_range: Optional[durationrange.DurationRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationRange' }})
    name_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namePattern' }})
    rules_package_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesPackageArns' }})
    start_time_range: Optional[timestamprange.TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeRange' }})
    state_change_time_range: Optional[timestamprange.TimestampRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateChangeTimeRange' }})
    states: Optional[List[assessmentrunstate_enum.AssessmentRunStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'states' }})
    
