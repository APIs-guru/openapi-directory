import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationConfiguration } from "./notificationconfiguration";


// AddNotificationChannelsResponse
/** 
 * The structure representing the AddNotificationChannelsResponse.
**/
export class AddNotificationChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=notificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;
}
