from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SimpleRuleEvaluation:
    r"""SimpleRuleEvaluation
    Information needed to compare two values with a comparison operator.
    """
    
    input_property_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputPropertyValue') }})
    operator: Optional[ComparisonOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    threshold_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdValue') }})
    
