import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecipientDetail } from "./recipientdetail";



// SmsConfiguration
/** 
 * Contains the configuration information of SMS notifications.
**/
export class SmsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalMessage" })
  additionalMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: RecipientDetail })
  recipients: RecipientDetail[];

  @SpeakeasyMetadata({ data: "json, name=senderId" })
  senderId?: string;
}
