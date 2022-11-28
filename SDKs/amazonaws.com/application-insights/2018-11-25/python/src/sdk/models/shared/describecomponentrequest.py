from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeComponentRequest:
    component_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentName') }})
    resource_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    
