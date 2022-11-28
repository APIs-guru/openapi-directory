import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStateChangeReasonCodeEnum } from "./instancestatechangereasoncodeenum";
/**
 * The details of the status change reason for the instance.
**/
export declare class InstanceStateChangeReason extends SpeakeasyBase {
    code?: InstanceStateChangeReasonCodeEnum;
    message?: string;
}
