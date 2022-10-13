from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThingTypeProperties:
    searchable_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchableAttributes' }})
    thing_type_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thingTypeDescription' }})
    
