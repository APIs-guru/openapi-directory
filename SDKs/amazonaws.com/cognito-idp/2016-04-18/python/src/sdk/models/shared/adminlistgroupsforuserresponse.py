from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grouptype


@dataclass_json
@dataclass
class AdminListGroupsForUserResponse:
    groups: Optional[List[grouptype.GroupType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Groups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
