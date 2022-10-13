from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gameservergroupdeleteoption_enum


@dataclass_json
@dataclass
class DeleteGameServerGroupInput:
    delete_option: Optional[gameservergroupdeleteoption_enum.GameServerGroupDeleteOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteOption' }})
    game_server_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    
