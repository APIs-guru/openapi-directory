import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationAction } from "./notificationaction";


// AlarmNotification
/** 
 * Contains information about one or more notification actions.
**/
export class AlarmNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=notificationActions", elemType: shared.NotificationAction })
  notificationActions?: NotificationAction[];
}
