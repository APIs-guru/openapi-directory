import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { NotificationStateEnum } from "./notificationstateenum";
import { NotificationTypeEnum } from "./notificationtypeenum";
import { ThresholdTypeEnum } from "./thresholdtypeenum";



// Notification
/** 
 * <p>A notification that is associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator: ComparisonOperatorEnum;

  @SpeakeasyMetadata({ data: "json, name=NotificationState" })
  notificationState?: NotificationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=NotificationType" })
  notificationType: NotificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Threshold" })
  threshold: number;

  @SpeakeasyMetadata({ data: "json, name=ThresholdType" })
  thresholdType?: ThresholdTypeEnum;
}
