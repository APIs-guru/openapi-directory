import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryMethodEnum } from "./deliverymethodenum";
import { EmailSettings } from "./emailsettings";
import { SmsSettings } from "./smssettings";



// UpdateBackendAuthForgotPasswordConfig
/** 
 * Describes the forgot password policy for authenticating into the Amplify app.
**/
export class UpdateBackendAuthForgotPasswordConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryMethod" })
  deliveryMethod?: DeliveryMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=EmailSettings" })
  emailSettings?: EmailSettings;

  @SpeakeasyMetadata({ data: "json, name=SmsSettings" })
  smsSettings?: SmsSettings;
}
