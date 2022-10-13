from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayerLatency:
    latency_in_milliseconds: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatencyInMilliseconds' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerId' }})
    region_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionIdentifier' }})
    
