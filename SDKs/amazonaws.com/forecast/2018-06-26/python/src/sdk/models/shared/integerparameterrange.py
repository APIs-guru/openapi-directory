from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntegerParameterRange:
    r"""IntegerParameterRange
    Specifies an integer hyperparameter and it's range of tunable values. This object is part of the <a>ParameterRanges</a> object.
    """
    
    max_value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxValue') }})
    min_value: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinValue') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scaling_type: Optional[ScalingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingType') }})
    
