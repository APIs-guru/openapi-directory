from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import placementsummary


@dataclass_json
@dataclass
class ListPlacementsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    placements: List[placementsummary.PlacementSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placements' }})
    
