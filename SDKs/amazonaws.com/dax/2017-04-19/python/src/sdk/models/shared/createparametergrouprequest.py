from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateParameterGroupRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    parameter_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    
