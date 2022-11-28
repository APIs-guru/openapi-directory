import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfiguration } from "./notificationconfiguration";



// GetNotificationConfigurationResponse
/** 
 * The structure representing the GetNotificationConfigurationResponse.
**/
export class GetNotificationConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notificationConfiguration" })
  notificationConfiguration: NotificationConfiguration;
}
