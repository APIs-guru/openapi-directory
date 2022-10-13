from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trailinfo


@dataclass_json
@dataclass
class ListTrailsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    trails: Optional[List[trailinfo.TrailInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Trails' }})
    
