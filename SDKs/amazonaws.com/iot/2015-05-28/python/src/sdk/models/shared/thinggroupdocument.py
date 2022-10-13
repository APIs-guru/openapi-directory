from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThingGroupDocument:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    parent_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentGroupNames' }})
    thing_group_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupDescription' }})
    thing_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupId' }})
    thing_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupName' }})
    
