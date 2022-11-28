import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
import { FailureTypeEnum } from "./failuretypeenum";
import { ActionHistoryStatusEnum } from "./actionhistorystatusenum";
/**
 * The record of a completed or failed managed action.
**/
export declare class ManagedActionHistoryItem extends SpeakeasyBase {
    actionDescription?: string;
    actionId?: string;
    actionType?: ActionTypeEnum;
    executedTime?: Date;
    failureDescription?: string;
    failureType?: FailureTypeEnum;
    finishedTime?: Date;
    status?: ActionHistoryStatusEnum;
}
