import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionHistoryDetails } from "./actionhistorydetails";
import { EventTypeEnum } from "./eventtypeenum";
import { ActionStatusEnum } from "./actionstatusenum";


// ActionHistory
/** 
 *  The historical records for a budget action. 
**/
export class ActionHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionHistoryDetails" })
  actionHistoryDetails: ActionHistoryDetails;

  @Metadata({ data: "json, name=EventType" })
  eventType: EventTypeEnum;

  @Metadata({ data: "json, name=Status" })
  status: ActionStatusEnum;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp: Date;
}
