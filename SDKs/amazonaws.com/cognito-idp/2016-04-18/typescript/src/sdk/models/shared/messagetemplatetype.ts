import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MessageTemplateType
/** 
 * The message template structure.
**/
export class MessageTemplateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailMessage" })
  emailMessage?: string;

  @Metadata({ data: "json, name=EmailSubject" })
  emailSubject?: string;

  @Metadata({ data: "json, name=SMSMessage" })
  smsMessage?: string;
}
