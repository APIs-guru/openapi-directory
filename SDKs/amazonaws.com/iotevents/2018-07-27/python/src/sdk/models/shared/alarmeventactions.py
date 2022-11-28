from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlarmEventActions:
    r"""AlarmEventActions
    Contains information about one or more alarm actions.
    """
    
    alarm_actions: Optional[List[AlarmAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmActions') }})
    
