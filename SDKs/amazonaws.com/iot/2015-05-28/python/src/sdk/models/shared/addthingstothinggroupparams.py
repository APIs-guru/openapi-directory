from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddThingsToThingGroupParams:
    override_dynamic_groups: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideDynamicGroups' }})
    thing_group_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupNames' }})
    
