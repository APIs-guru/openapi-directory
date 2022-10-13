from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gameserverinstance


@dataclass_json
@dataclass
class DescribeGameServerInstancesOutput:
    game_server_instances: Optional[List[gameserverinstance.GameServerInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerInstances' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
