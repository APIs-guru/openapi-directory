import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotifyEmailType
/** 
 * The notify email type.
**/
export class NotifyEmailType extends SpeakeasyBase {
  @Metadata({ data: "json, name=HtmlBody" })
  htmlBody?: string;

  @Metadata({ data: "json, name=Subject" })
  subject: string;

  @Metadata({ data: "json, name=TextBody" })
  textBody?: string;
}
