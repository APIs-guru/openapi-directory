import { SpeakeasyBase } from "../../../internal/utils";
import { EmailSendingAccountTypeEnum } from "./emailsendingaccounttypeenum";
/**
 * <p>The email configuration type. </p> <note> <p>Amazon Cognito has specific regions for use with Amazon SES. For more information on the supported regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email Settings for Amazon Cognito User Pools</a>.</p> </note>
**/
export declare class EmailConfigurationType extends SpeakeasyBase {
    configurationSet?: string;
    emailSendingAccount?: EmailSendingAccountTypeEnum;
    from?: string;
    replyToEmailAddress?: string;
    sourceArn?: string;
}
