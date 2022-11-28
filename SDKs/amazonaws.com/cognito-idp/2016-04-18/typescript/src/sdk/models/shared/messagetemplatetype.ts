import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MessageTemplateType
/** 
 * The message template structure.
**/
export class MessageTemplateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailMessage" })
  emailMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailSubject" })
  emailSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=SMSMessage" })
  smsMessage?: string;
}
