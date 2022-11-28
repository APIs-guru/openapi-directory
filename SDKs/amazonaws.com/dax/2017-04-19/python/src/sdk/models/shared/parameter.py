from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Parameter:
    r"""Parameter
    Describes an individual setting that controls some aspect of DAX behavior.
    """
    
    allowed_values: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedValues') }})
    change_type: Optional[ChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeType') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_modifiable: Optional[IsModifiableEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsModifiable') }})
    node_type_specific_values: Optional[List[NodeTypeSpecificValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeTypeSpecificValues') }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterName') }})
    parameter_type: Optional[ParameterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterType') }})
    parameter_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterValue') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    
