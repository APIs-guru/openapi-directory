from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LifecyclePolicyRuleAction:
    r"""LifecyclePolicyRuleAction
    The type of action to be taken.
    """
    
    type: Optional[ImageActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
