import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationTargetActions } from "./notificationtargetactions";
import { EmailConfiguration } from "./emailconfiguration";
import { SmsConfiguration } from "./smsconfiguration";
/**
 * Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model.
**/
export declare class NotificationAction extends SpeakeasyBase {
    action: NotificationTargetActions;
    emailConfigurations?: EmailConfiguration[];
    smsConfigurations?: SmsConfiguration[];
}
