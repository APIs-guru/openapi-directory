from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateComponentRequest:
    component_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentName') }})
    resource_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    resource_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceList') }})
    
