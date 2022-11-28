from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerAction:
    r"""CustomerAction
    Contains information about the action that you can take to respond to the alarm.
    """
    
    acknowledge_action_configuration: Optional[AcknowledgeActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgeActionConfiguration') }})
    action_name: Optional[CustomerActionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    disable_action_configuration: Optional[DisableActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableActionConfiguration') }})
    enable_action_configuration: Optional[EnableActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableActionConfiguration') }})
    reset_action_configuration: Optional[ResetActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetActionConfiguration') }})
    snooze_action_configuration: Optional[SnoozeActionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snoozeActionConfiguration') }})
    
