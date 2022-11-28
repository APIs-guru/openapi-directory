from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FieldTypeDetails:
    r"""FieldTypeDetails
     Contains details regarding the supported field type and the operators that can be applied for filtering. 
    """
    
    field_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldType') }})
    filter_operators: List[OperatorEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterOperators') }})
    supported_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedValues') }})
    
