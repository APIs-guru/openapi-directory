import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotifyEmailType
/** 
 * The notify email type.
**/
export class NotifyEmailType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HtmlBody" })
  htmlBody?: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "json, name=TextBody" })
  textBody?: string;
}
