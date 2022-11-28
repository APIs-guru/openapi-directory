import { SpeakeasyBase } from "../../../internal/utils";
import { GameServerGroupInstanceTypeEnum } from "./gameservergroupinstancetypeenum";
/**
 * <p> <b>This data type is used with the GameLift FleetIQ and game server groups.</b> </p> <p>An allowed instance type for a <a>GameServerGroup</a>. All game server groups must have at least two instance types defined for it. GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p>
**/
export declare class InstanceDefinition extends SpeakeasyBase {
    instanceType: GameServerGroupInstanceTypeEnum;
    weightedCapacity?: string;
}
