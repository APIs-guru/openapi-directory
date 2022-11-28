from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResetTimerAction:
    r"""ResetTimerAction
    Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
    """
    
    timer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerName') }})
    
