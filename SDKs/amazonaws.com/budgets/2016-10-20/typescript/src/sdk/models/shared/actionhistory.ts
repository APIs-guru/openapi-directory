import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionHistoryDetails } from "./actionhistorydetails";
import { EventTypeEnum } from "./eventtypeenum";
import { ActionStatusEnum } from "./actionstatusenum";



// ActionHistory
/** 
 *  The historical records for a budget action. 
**/
export class ActionHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionHistoryDetails" })
  actionHistoryDetails: ActionHistoryDetails;

  @SpeakeasyMetadata({ data: "json, name=EventType" })
  eventType: EventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ActionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp: Date;
}
