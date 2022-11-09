import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecipientDetail } from "./recipientdetail";


// SmsConfiguration
/** 
 * Contains the configuration information of SMS notifications.
**/
export class SmsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalMessage" })
  additionalMessage?: string;

  @Metadata({ data: "json, name=recipients", elemType: shared.RecipientDetail })
  recipients: RecipientDetail[];

  @Metadata({ data: "json, name=senderId" })
  senderId?: string;
}
