from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gamesessionplacement


@dataclass_json
@dataclass
class DescribeGameSessionPlacementOutput:
    game_session_placement: Optional[gamesessionplacement.GameSessionPlacement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionPlacement' }})
    
