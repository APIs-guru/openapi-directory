import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationTargetActions } from "./notificationtargetactions";
import { EmailConfiguration } from "./emailconfiguration";
import { SmsConfiguration } from "./smsconfiguration";


// NotificationAction
/** 
 * Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.
**/
export class NotificationAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: NotificationTargetActions;

  @Metadata({ data: "json, name=emailConfigurations", elemType: shared.EmailConfiguration })
  emailConfigurations?: EmailConfiguration[];

  @Metadata({ data: "json, name=smsConfigurations", elemType: shared.SmsConfiguration })
  smsConfigurations?: SmsConfiguration[];
}
