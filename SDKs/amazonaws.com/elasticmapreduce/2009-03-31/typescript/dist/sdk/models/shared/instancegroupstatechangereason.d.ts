import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupStateChangeReasonCodeEnum } from "./instancegroupstatechangereasoncodeenum";
/**
 * The status change reason details for the instance group.
**/
export declare class InstanceGroupStateChangeReason extends SpeakeasyBase {
    code?: InstanceGroupStateChangeReasonCodeEnum;
    message?: string;
}
