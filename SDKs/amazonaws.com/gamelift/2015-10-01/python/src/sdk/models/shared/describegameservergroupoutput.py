from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gameservergroup


@dataclass_json
@dataclass
class DescribeGameServerGroupOutput:
    game_server_group: Optional[gameservergroup.GameServerGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroup' }})
    
