from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlarmState:
    r"""AlarmState
    Contains information about the current state of the alarm.
    """
    
    customer_action: Optional[CustomerAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAction') }})
    rule_evaluation: Optional[RuleEvaluation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleEvaluation') }})
    state_name: Optional[AlarmStateNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateName') }})
    system_event: Optional[SystemEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemEvent') }})
    
