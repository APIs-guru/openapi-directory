import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailSettings
/** 
 * The configuration for the email sent when an app user forgets their password.
**/
export class EmailSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailMessage" })
  emailMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailSubject" })
  emailSubject?: string;
}
