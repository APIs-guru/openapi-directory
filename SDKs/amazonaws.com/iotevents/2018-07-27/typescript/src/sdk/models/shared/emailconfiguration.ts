import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailContent } from "./emailcontent";
import { EmailRecipients } from "./emailrecipients";



// EmailConfiguration
/** 
 * Contains the configuration information of email notifications.
**/
export class EmailConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: EmailContent;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients: EmailRecipients;
}
