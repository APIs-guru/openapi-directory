from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StateChangeConfiguration:
    r"""StateChangeConfiguration
    Contains the configuration information of alarm state changes.
    """
    
    trigger_type: Optional[TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerType') }})
    
