import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetTrackingConfiguration
/** 
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>Settings for a target-based scaling policy as part of a <a>GameServerGroupAutoScalingPolicy</a>. These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric <code>"PercentUtilizedGameServers"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p>
**/
export class TargetTrackingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
