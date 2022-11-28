from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value.
    """
    
    condition: FilterConditionStringEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
