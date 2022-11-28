from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionThreshold:
    r"""ActionThreshold
     The trigger threshold of the action. 
    """
    
    action_threshold_type: ThresholdTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionThresholdType') }})
    action_threshold_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionThresholdValue') }})
    
