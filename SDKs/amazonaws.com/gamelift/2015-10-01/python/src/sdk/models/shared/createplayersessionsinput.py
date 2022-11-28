from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreatePlayerSessionsInput:
    r"""CreatePlayerSessionsInput
    Represents the input for a request operation.
    """
    
    game_session_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    player_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerIds') }})
    player_data_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerDataMap') }})
    
