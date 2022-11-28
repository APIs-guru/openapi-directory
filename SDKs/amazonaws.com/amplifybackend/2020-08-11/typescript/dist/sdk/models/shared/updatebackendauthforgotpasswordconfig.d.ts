import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMethodEnum } from "./deliverymethodenum";
import { EmailSettings } from "./emailsettings";
import { SmsSettings } from "./smssettings";
/**
 * Describes the forgot password policy for authenticating into the Amplify app.
**/
export declare class UpdateBackendAuthForgotPasswordConfig extends SpeakeasyBase {
    deliveryMethod?: DeliveryMethodEnum;
    emailSettings?: EmailSettings;
    smsSettings?: SmsSettings;
}
