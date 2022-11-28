from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NumberAttributeConstraintsType:
    r"""NumberAttributeConstraintsType
    The minimum and maximum value of an attribute that is of the number data type.
    """
    
    max_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxValue') }})
    min_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinValue') }})
    
