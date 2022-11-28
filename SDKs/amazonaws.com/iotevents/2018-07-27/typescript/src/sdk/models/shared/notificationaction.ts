import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationTargetActions } from "./notificationtargetactions";
import { EmailConfiguration } from "./emailconfiguration";
import { SmsConfiguration } from "./smsconfiguration";



// NotificationAction
/** 
 * Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.
**/
export class NotificationAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: NotificationTargetActions;

  @SpeakeasyMetadata({ data: "json, name=emailConfigurations", elemType: EmailConfiguration })
  emailConfigurations?: EmailConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=smsConfigurations", elemType: SmsConfiguration })
  smsConfigurations?: SmsConfiguration[];
}
