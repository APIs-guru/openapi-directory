import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfiguration } from "./notificationconfiguration";



// RemoveNotificationChannelResponse
/** 
 * The structure representing the RemoveNotificationChannelResponse.
**/
export class RemoveNotificationChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;
}
