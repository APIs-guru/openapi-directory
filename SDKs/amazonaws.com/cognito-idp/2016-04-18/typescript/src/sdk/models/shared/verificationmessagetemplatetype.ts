import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultEmailOptionTypeEnum } from "./defaultemailoptiontypeenum";


// VerificationMessageTemplateType
/** 
 * The template for verification messages.
**/
export class VerificationMessageTemplateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultEmailOption" })
  defaultEmailOption?: DefaultEmailOptionTypeEnum;

  @Metadata({ data: "json, name=EmailMessage" })
  emailMessage?: string;

  @Metadata({ data: "json, name=EmailMessageByLink" })
  emailMessageByLink?: string;

  @Metadata({ data: "json, name=EmailSubject" })
  emailSubject?: string;

  @Metadata({ data: "json, name=EmailSubjectByLink" })
  emailSubjectByLink?: string;

  @Metadata({ data: "json, name=SmsMessage" })
  smsMessage?: string;
}
