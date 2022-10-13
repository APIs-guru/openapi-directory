from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import location


@dataclass_json
@dataclass
class Locations:
    locations: Optional[List[location.Location]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    
