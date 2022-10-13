from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Group:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    
