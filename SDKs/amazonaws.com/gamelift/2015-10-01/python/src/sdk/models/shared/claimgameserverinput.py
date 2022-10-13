from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClaimGameServerInput:
    game_server_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerData' }})
    game_server_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    game_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerId' }})
    
