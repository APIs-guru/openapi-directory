import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailContent } from "./emailcontent";
import { EmailRecipients } from "./emailrecipients";


// EmailConfiguration
/** 
 * Contains the configuration information of email notifications.
**/
export class EmailConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: EmailContent;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=recipients" })
  recipients: EmailRecipients;
}
