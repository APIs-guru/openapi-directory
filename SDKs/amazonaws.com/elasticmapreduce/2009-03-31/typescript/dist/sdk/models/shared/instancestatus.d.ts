import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateEnum } from "./instancestateenum";
import { InstanceStateChangeReason } from "./instancestatechangereason";
import { InstanceTimeline } from "./instancetimeline";
/**
 * The instance status details.
**/
export declare class InstanceStatus extends SpeakeasyBase {
    state?: InstanceStateEnum;
    stateChangeReason?: InstanceStateChangeReason;
    timeline?: InstanceTimeline;
}
