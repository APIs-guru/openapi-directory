import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailSendingAccountTypeEnum } from "./emailsendingaccounttypeenum";



// EmailConfigurationType
/** 
 * <p>The email configuration type. </p> <note> <p>Amazon Cognito has specific regions for use with Amazon SES. For more information on the supported regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email Settings for Amazon Cognito User Pools</a>.</p> </note>
**/
export class EmailConfigurationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSet" })
  configurationSet?: string;

  @SpeakeasyMetadata({ data: "json, name=EmailSendingAccount" })
  emailSendingAccount?: EmailSendingAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=From" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplyToEmailAddress" })
  replyToEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceArn" })
  sourceArn?: string;
}
