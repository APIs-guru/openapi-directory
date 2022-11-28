from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GroupOwnerSetting:
    r"""GroupOwnerSetting
    Group owner related settings for local resources.
    """
    
    auto_add_group_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAddGroupOwner') }})
    group_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupOwner') }})
    
