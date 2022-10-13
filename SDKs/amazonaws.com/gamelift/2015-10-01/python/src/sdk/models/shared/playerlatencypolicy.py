from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayerLatencyPolicy:
    maximum_individual_player_latency_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumIndividualPlayerLatencyMilliseconds' }})
    policy_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyDurationSeconds' }})
    
