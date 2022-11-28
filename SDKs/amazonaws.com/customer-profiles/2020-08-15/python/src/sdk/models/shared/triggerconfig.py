from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TriggerConfig:
    r"""TriggerConfig
    The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
    """
    
    trigger_type: TriggerTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TriggerType') }})
    trigger_properties: Optional[TriggerProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TriggerProperties') }})
    
