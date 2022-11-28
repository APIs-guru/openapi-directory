from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TriggerProperties:
    r"""TriggerProperties
    Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.
    """
    
    scheduled: Optional[ScheduledTriggerProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scheduled') }})
    
