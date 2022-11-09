import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MfaTypesElementEnum } from "./mfatypeselementenum";


// Settings
/** 
 * The settings of your MFA configuration for the backend of your Amplify project.
**/
export class Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=MfaTypes" })
  mfaTypes?: MfaTypesElementEnum[];

  @Metadata({ data: "json, name=SmsMessage" })
  smsMessage?: string;
}
