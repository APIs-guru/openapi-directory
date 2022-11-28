from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreatePlayerSessionInput:
    r"""CreatePlayerSessionInput
    Represents the input for a request operation.
    """
    
    game_session_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    player_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerId') }})
    player_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerData') }})
    
