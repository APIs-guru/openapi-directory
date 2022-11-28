import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
import { ActionStatusEnum } from "./actionstatusenum";
/**
 * The record of an upcoming or in-progress managed action.
**/
export declare class ManagedAction extends SpeakeasyBase {
    actionDescription?: string;
    actionId?: string;
    actionType?: ActionTypeEnum;
    status?: ActionStatusEnum;
    windowStartTime?: Date;
}
