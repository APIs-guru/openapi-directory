import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SmsSettings
/** 
 * SMS settings for authentication.
**/
export class SmsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=SmsMessage" })
  smsMessage?: string;
}
