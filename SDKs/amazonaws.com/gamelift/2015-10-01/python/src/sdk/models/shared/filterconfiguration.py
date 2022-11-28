from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FilterConfiguration:
    r"""FilterConfiguration
    <p>A list of fleet locations where a game session queue can place new game sessions. You can use a filter to temporarily turn off placements for specific locations. For queues that have multi-location fleets, you can use a filter configuration allow placement with some, but not all of these locations.</p> <p>Filter configurations are part of a <a>GameSessionQueue</a>.</p>
    """
    
    allowed_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedLocations') }})
    
