import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryMethodEnum } from "./deliverymethodenum";
import { EmailSettings } from "./emailsettings";
import { SmsSettings } from "./smssettings";


// UpdateBackendAuthForgotPasswordConfig
/** 
 * Describes the forgot password policy for authenticating into the Amplify app.
**/
export class UpdateBackendAuthForgotPasswordConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeliveryMethod" })
  deliveryMethod?: DeliveryMethodEnum;

  @Metadata({ data: "json, name=EmailSettings" })
  emailSettings?: EmailSettings;

  @Metadata({ data: "json, name=SmsSettings" })
  smsSettings?: SmsSettings;
}
