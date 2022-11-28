from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlarmConfiguration:
    r"""AlarmConfiguration
    Information about alarms associated with the deployment group.
    """
    
    alarms: Optional[List[Alarm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarms') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    ignore_poll_alarm_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignorePollAlarmFailure') }})
    
