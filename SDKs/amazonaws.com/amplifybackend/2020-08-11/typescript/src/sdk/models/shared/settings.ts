import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaTypesElementEnum } from "./mfatypeselementenum";



// Settings
/** 
 * The settings of your MFA configuration for the backend of your Amplify project.
**/
export class Settings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MfaTypes" })
  mfaTypes?: MfaTypesElementEnum[];

  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: string;
}
