import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmsConfigurationType } from "./smsconfigurationtype";


// SmsMfaConfigType
/** 
 * The SMS text message multi-factor authentication (MFA) configuration type.
**/
export class SmsMfaConfigType extends SpeakeasyBase {
  @Metadata({ data: "json, name=SmsAuthenticationMessage" })
  smsAuthenticationMessage?: string;

  @Metadata({ data: "json, name=SmsConfiguration" })
  smsConfiguration?: SmsConfigurationType;
}
