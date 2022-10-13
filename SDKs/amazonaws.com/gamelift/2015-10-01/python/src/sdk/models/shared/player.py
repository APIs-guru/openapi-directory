from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class Player:
    latency_in_ms: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatencyInMs' }})
    player_attributes: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerAttributes' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerId' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Team' }})
    
