from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Group:
    r"""Group
    A group object, which contains a specified group’s metadata and attributes.
    """
    
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    
