from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GameServerGroupAutoScalingPolicy:
    r"""GameServerGroupAutoScalingPolicy
    <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group with <a>CreateGameServerGroup</a>. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group. </p>
    """
    
    target_tracking_configuration: TargetTrackingConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTrackingConfiguration') }})
    estimated_instance_warmup: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedInstanceWarmup') }})
    
