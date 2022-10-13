from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gameserverclaimstatus_enum
from . import gameserverutilizationstatus_enum


@dataclass_json
@dataclass
class GameServer:
    claim_status: Optional[gameserverclaimstatus_enum.GameServerClaimStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClaimStatus' }})
    connection_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionInfo' }})
    game_server_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerData' }})
    game_server_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupArn' }})
    game_server_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerGroupName' }})
    game_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServerId' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    last_claim_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastClaimTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_health_check_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastHealthCheckTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    utilization_status: Optional[gameserverutilizationstatus_enum.GameServerUtilizationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UtilizationStatus' }})
    
