from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeGameServerInstancesInput:
    game_server_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    instance_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceIds' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
