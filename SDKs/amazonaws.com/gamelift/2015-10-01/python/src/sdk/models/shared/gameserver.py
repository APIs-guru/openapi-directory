from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GameServer:
    r"""GameServer
    <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a <a>GameServerGroup</a>. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> <p> <b>Related actions</b> </p> <p> <a>RegisterGameServer</a> | <a>ListGameServers</a> | <a>ClaimGameServer</a> | <a>DescribeGameServer</a> | <a>UpdateGameServer</a> | <a>DeregisterGameServer</a> | <a href=\"https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html\">All APIs by task</a> </p>
    """
    
    claim_status: Optional[GameServerClaimStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClaimStatus') }})
    connection_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionInfo') }})
    game_server_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerData') }})
    game_server_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupArn') }})
    game_server_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    game_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerId') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    last_claim_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastClaimTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_health_check_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastHealthCheckTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    registration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    utilization_status: Optional[GameServerUtilizationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UtilizationStatus') }})
    
