import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailContent } from "./emailcontent";
import { EmailRecipients } from "./emailrecipients";
/**
 * Contains the configuration information of email notifications.
**/
export declare class EmailConfiguration extends SpeakeasyBase {
    content?: EmailContent;
    from: string;
    recipients: EmailRecipients;
}
