import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationConfiguration } from "./notificationconfiguration";


// GetNotificationConfigurationResponse
/** 
 * The structure representing the GetNotificationConfigurationResponse.
**/
export class GetNotificationConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=notificationConfiguration" })
  notificationConfiguration: NotificationConfiguration;
}
