from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import gameservergroupaction_enum


@dataclass_json
@dataclass
class ResumeGameServerGroupInput:
    game_server_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    resume_actions: List[gameservergroupaction_enum.GameServerGroupActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResumeActions' }})
    
