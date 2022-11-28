from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGameSessionInput:
    r"""CreateGameSessionInput
    Represents the input for a request operation.
    """
    
    maximum_player_session_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPlayerSessionCount') }})
    alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    creator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorId') }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    game_properties: Optional[List[GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameProperties') }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionData') }})
    game_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionId') }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
