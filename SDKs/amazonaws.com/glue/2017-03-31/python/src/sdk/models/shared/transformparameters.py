from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformParameters:
    r"""TransformParameters
    The algorithm-specific parameters that are associated with the machine learning transform.
    """
    
    transform_type: TransformTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformType') }})
    find_matches_parameters: Optional[FindMatchesParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindMatchesParameters') }})
    
