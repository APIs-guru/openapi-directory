from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Rule:
    r"""Rule
    Represents a condition for a device pool.
    """
    
    attribute: Optional[DeviceAttributeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    operator: Optional[RuleOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
