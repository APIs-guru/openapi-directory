from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import thinggroupdocument
from . import thingdocument


@dataclass_json
@dataclass
class SearchIndexResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    thing_groups: Optional[List[thinggroupdocument.ThingGroupDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingGroups' }})
    things: Optional[List[thingdocument.ThingDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'things' }})
    
