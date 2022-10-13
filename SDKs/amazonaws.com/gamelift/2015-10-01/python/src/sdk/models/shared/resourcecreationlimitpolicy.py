from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceCreationLimitPolicy:
    new_game_sessions_per_creator: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewGameSessionsPerCreator' }})
    policy_period_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyPeriodInMinutes' }})
    
