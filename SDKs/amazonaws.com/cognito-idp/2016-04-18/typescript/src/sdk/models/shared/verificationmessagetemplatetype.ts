import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultEmailOptionTypeEnum } from "./defaultemailoptiontypeenum";



// VerificationMessageTemplateType
/** 
 * The template for verification messages.
**/
export class VerificationMessageTemplateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultEmailOption" })
  defaultEmailOption?: DefaultEmailOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EmailMessage" })
  emailMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailMessageByLink" })
  emailMessageByLink?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailSubject" })
  emailSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailSubjectByLink" })
  emailSubjectByLink?: string;

  @SpeakeasyMetadata({ data: "json, name=SmsMessage" })
  smsMessage?: string;
}
