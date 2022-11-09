import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnsChannelConfig } from "./snschannelconfig";


// NotificationChannelConfig
/** 
 *  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
**/
export class NotificationChannelConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Sns" })
  sns: SnsChannelConfig;
}
