import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetStateEnum } from "./instancefleetstateenum";
import { InstanceFleetStateChangeReason } from "./instancefleetstatechangereason";
import { InstanceFleetTimeline } from "./instancefleettimeline";
/**
 * <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export declare class InstanceFleetStatus extends SpeakeasyBase {
    state?: InstanceFleetStateEnum;
    stateChangeReason?: InstanceFleetStateChangeReason;
    timeline?: InstanceFleetTimeline;
}
