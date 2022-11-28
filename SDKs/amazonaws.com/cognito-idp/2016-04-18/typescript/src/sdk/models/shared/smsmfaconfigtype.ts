import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmsConfigurationType } from "./smsconfigurationtype";



// SmsMfaConfigType
/** 
 * The SMS text message multi-factor authentication (MFA) configuration type.
**/
export class SmsMfaConfigType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SmsAuthenticationMessage" })
  smsAuthenticationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=SmsConfiguration" })
  smsConfiguration?: SmsConfigurationType;
}
