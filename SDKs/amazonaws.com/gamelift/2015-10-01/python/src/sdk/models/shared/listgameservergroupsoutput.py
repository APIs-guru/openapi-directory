from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gameservergroup


@dataclass_json
@dataclass
class ListGameServerGroupsOutput:
    game_server_groups: Optional[List[gameservergroup.GameServerGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
