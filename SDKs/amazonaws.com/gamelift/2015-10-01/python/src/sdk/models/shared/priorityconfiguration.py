from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PriorityConfiguration:
    r"""PriorityConfiguration
    <p>Custom prioritization settings for use by a game session queue when placing new game sessions with available game servers. When defined, this configuration replaces the default FleetIQ prioritization process, which is as follows:</p> <ul> <li> <p>If player latency data is included in a game session request, destinations and locations are prioritized first based on lowest average latency (1), then on lowest hosting cost (2), then on destination list order (3), and finally on location (alphabetical) (4). This approach ensures that the queue's top priority is to place game sessions where average player latency is lowest, and--if latency is the same--where the hosting cost is less, etc.</p> </li> <li> <p>If player latency data is not included, destinations and locations are prioritized first on destination list order (1), and then on location (alphabetical) (2). This approach ensures that the queue's top priority is to place game sessions on the first destination fleet listed. If that fleet has multiple locations, the game session is placed on the first location (when listed alphabetically).</p> </li> </ul> <p>Changing the priority order will affect how game sessions are placed.</p> <p>Priority configurations are part of a <a>GameSessionQueue</a>.</p>
    """
    
    location_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationOrder') }})
    priority_order: Optional[List[PriorityTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PriorityOrder') }})
    
