import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SmsSettings
/** 
 * SMS settings for authentication.
**/
export class SmsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: string;
}
