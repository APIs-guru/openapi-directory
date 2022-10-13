from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import thingtypedefinition


@dataclass_json
@dataclass
class ListThingTypesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    thing_types: Optional[List[thingtypedefinition.ThingTypeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypes' }})
    
