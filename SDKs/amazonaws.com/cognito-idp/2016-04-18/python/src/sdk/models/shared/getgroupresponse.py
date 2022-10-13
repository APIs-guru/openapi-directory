from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grouptype


@dataclass_json
@dataclass
class GetGroupResponse:
    group: Optional[grouptype.GroupType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Group' }})
    
