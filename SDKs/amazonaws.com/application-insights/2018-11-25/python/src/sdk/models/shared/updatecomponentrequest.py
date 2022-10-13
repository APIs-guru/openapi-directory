from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateComponentRequest:
    component_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentName' }})
    new_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewComponentName' }})
    resource_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceGroupName' }})
    resource_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceList' }})
    
