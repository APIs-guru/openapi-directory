from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupedResourceCount:
    group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    resource_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCount' }})
    
