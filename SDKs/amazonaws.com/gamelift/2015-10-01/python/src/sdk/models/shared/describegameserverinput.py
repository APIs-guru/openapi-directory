from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeGameServerInput:
    game_server_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    game_server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerId' }})
    
