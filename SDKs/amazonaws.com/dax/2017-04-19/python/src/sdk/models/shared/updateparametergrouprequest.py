from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import parameternamevalue


@dataclass_json
@dataclass
class UpdateParameterGroupRequest:
    parameter_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    parameter_name_values: List[parameternamevalue.ParameterNameValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterNameValues' }})
    
