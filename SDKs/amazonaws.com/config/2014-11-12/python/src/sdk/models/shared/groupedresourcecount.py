from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupedResourceCount:
    r"""GroupedResourceCount
    The count of resources that are grouped by the group name.
    """
    
    group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    resource_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceCount') }})
    
