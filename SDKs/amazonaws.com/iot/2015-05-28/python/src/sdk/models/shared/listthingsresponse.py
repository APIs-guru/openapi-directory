from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import thingattribute


@dataclass_json
@dataclass
class ListThingsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    things: Optional[List[thingattribute.ThingAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'things' }})
    
