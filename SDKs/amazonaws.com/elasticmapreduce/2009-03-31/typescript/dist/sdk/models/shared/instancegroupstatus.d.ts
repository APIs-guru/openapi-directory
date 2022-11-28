import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupStateEnum } from "./instancegroupstateenum";
import { InstanceGroupStateChangeReason } from "./instancegroupstatechangereason";
import { InstanceGroupTimeline } from "./instancegrouptimeline";
/**
 * The details of the instance group status.
**/
export declare class InstanceGroupStatus extends SpeakeasyBase {
    state?: InstanceGroupStateEnum;
    stateChangeReason?: InstanceGroupStateChangeReason;
    timeline?: InstanceGroupTimeline;
}
