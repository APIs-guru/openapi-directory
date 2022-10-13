from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gameserverhealthcheck_enum
from . import gameserverutilizationstatus_enum


@dataclass_json
@dataclass
class UpdateGameServerInput:
    game_server_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerData' }})
    game_server_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    game_server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerId' }})
    health_check: Optional[gameserverhealthcheck_enum.GameServerHealthCheckEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthCheck' }})
    utilization_status: Optional[gameserverutilizationstatus_enum.GameServerUtilizationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UtilizationStatus' }})
    
