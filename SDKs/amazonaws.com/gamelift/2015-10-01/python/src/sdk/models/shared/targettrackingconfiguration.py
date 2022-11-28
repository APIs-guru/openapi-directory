from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TargetTrackingConfiguration:
    r"""TargetTrackingConfiguration
    <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Settings for a target-based scaling policy as part of a <a>GameServerGroupAutoScalingPolicy</a>. These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric <code>\"PercentUtilizedGameServers\"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p>
    """
    
    target_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetValue') }})
    
