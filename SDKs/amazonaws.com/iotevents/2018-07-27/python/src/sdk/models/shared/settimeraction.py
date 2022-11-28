from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetTimerAction:
    r"""SetTimerAction
    Information needed to set the timer.
    """
    
    timer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerName') }})
    duration_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationExpression') }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
