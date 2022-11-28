import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceActionEnum } from "./instanceactionenum";
/**
 * Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments.
**/
export declare class BlueInstanceTerminationOption extends SpeakeasyBase {
    action?: InstanceActionEnum;
    terminationWaitTimeInMinutes?: number;
}
