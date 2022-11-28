import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationAction } from "./notificationaction";



// AlarmNotification
/** 
 * Contains information about one or more notification actions.
**/
export class AlarmNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notificationActions", elemType: NotificationAction })
  notificationActions?: NotificationAction[];
}
