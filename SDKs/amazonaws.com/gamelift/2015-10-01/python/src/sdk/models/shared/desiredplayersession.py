from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DesiredPlayerSession:
    r"""DesiredPlayerSession
    Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.
    """
    
    player_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerData') }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerId') }})
    
