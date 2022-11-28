from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SimpleRule:
    r"""SimpleRule
    A rule that compares an input property value to a threshold value with a comparison operator.
    """
    
    comparison_operator: ComparisonOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonOperator') }})
    input_property: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputProperty') }})
    threshold: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    
