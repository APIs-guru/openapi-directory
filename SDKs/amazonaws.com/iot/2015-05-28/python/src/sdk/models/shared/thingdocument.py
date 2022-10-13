from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import thingconnectivity


@dataclass_json
@dataclass
class ThingDocument:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    connectivity: Optional[thingconnectivity.ThingConnectivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectivity' }})
    shadow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shadow' }})
    thing_group_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroupNames' }})
    thing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingId' }})
    thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingName' }})
    thing_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeName' }})
    
