from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateParameterGroupRequest:
    parameter_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
