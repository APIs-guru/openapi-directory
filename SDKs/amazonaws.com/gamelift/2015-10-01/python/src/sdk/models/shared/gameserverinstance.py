from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gameserverinstancestatus_enum


@dataclass_json
@dataclass
class GameServerInstance:
    game_server_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupArn' }})
    game_server_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    instance_status: Optional[gameserverinstancestatus_enum.GameServerInstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceStatus' }})
    
