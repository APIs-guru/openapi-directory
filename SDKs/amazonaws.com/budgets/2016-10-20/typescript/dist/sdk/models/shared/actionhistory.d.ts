import { SpeakeasyBase } from "../../../internal/utils";
import { ActionHistoryDetails } from "./actionhistorydetails";
import { EventTypeEnum } from "./eventtypeenum";
import { ActionStatusEnum } from "./actionstatusenum";
/**
 *  The historical records for a budget action.
**/
export declare class ActionHistory extends SpeakeasyBase {
    actionHistoryDetails: ActionHistoryDetails;
    eventType: EventTypeEnum;
    status: ActionStatusEnum;
    timestamp: Date;
}
