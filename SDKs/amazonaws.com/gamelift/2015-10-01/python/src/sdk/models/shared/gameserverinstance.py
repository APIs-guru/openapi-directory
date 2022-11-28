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
class GameServerInstance:
    r"""GameServerInstance
    <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p> <p> <b>Related actions</b> </p> <p> <a>CreateGameServerGroup</a> | <a>ListGameServerGroups</a> | <a>DescribeGameServerGroup</a> | <a>UpdateGameServerGroup</a> | <a>DeleteGameServerGroup</a> | <a>ResumeGameServerGroup</a> | <a>SuspendGameServerGroup</a> | <a>DescribeGameServerInstances</a> | <a href=\"https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html\">All APIs by task</a> </p>
    """
    
    game_server_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupArn') }})
    game_server_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameServerGroupName') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    instance_status: Optional[GameServerInstanceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceStatus') }})
    
