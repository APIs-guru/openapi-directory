from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TriggerConfig:
    r"""TriggerConfig
    Information about notification triggers for the deployment group.
    """
    
    trigger_events: Optional[List[TriggerEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerEvents') }})
    trigger_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerName') }})
    trigger_target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerTargetArn') }})
    
