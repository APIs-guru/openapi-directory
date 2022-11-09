import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailSendingAccountTypeEnum } from "./emailsendingaccounttypeenum";


// EmailConfigurationType
/** 
 * <p>The email configuration type. </p> <note> <p>Amazon Cognito has specific regions for use with Amazon SES. For more information on the supported regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email Settings for Amazon Cognito User Pools</a>.</p> </note>
**/
export class EmailConfigurationType extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSet" })
  configurationSet?: string;

  @Metadata({ data: "json, name=EmailSendingAccount" })
  emailSendingAccount?: EmailSendingAccountTypeEnum;

  @Metadata({ data: "json, name=From" })
  from?: string;

  @Metadata({ data: "json, name=ReplyToEmailAddress" })
  replyToEmailAddress?: string;

  @Metadata({ data: "json, name=SourceArn" })
  sourceArn?: string;
}
