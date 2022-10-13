from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import failuredetails
from . import stepstate_enum
from . import stepstatechangereason
from . import steptimeline


@dataclass_json
@dataclass
class StepStatus:
    failure_details: Optional[failuredetails.FailureDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureDetails' }})
    state: Optional[stepstate_enum.StepStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_change_reason: Optional[stepstatechangereason.StepStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateChangeReason' }})
    timeline: Optional[steptimeline.StepTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeline' }})
    
