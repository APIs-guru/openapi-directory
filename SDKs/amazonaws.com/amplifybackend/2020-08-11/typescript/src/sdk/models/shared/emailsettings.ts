import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailSettings
/** 
 * The configuration for the email sent when an app user forgets their password.
**/
export class EmailSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailMessage" })
  emailMessage?: string;

  @Metadata({ data: "json, name=EmailSubject" })
  emailSubject?: string;
}
