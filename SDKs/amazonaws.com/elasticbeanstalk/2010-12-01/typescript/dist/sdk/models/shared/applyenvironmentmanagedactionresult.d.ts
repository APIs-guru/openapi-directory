import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
/**
 * The result message containing information about the managed action.
**/
export declare class ApplyEnvironmentManagedActionResult extends SpeakeasyBase {
    actionDescription?: string;
    actionId?: string;
    actionType?: ActionTypeEnum;
    status?: string;
}
