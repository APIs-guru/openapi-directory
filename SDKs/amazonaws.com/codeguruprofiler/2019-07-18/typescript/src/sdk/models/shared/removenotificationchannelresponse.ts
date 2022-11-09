import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationConfiguration } from "./notificationconfiguration";


// RemoveNotificationChannelResponse
/** 
 * The structure representing the RemoveNotificationChannelResponse.
**/
export class RemoveNotificationChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=notificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;
}
