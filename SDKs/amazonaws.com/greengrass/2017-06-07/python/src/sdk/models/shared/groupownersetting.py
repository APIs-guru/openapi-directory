from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupOwnerSetting:
    auto_add_group_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoAddGroupOwner' }})
    group_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupOwner' }})
    
