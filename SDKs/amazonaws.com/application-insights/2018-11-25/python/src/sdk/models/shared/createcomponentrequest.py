from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateComponentRequest:
    component_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentName' }})
    resource_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    resource_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceList' }})
    
