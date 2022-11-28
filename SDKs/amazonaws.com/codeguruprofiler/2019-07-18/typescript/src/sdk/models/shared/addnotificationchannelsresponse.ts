import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfiguration } from "./notificationconfiguration";



// AddNotificationChannelsResponse
/** 
 * The structure representing the AddNotificationChannelsResponse.
**/
export class AddNotificationChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;
}
