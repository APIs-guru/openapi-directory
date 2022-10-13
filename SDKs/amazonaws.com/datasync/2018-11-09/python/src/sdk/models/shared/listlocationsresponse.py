from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locationlistentry


@dataclass_json
@dataclass
class ListLocationsResponse:
    locations: Optional[List[locationlistentry.LocationListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Locations' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
