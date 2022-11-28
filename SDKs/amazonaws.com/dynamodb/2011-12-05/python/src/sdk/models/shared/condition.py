from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Condition:
    comparison_operator: ComparisonOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    attribute_value_list: Optional[List[AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeValueList') }})
    
