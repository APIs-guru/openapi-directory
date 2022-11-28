import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BounceAction
/** 
 * <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p>
**/
export class BounceAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message: string;

  @SpeakeasyMetadata()
  sender: string;

  @SpeakeasyMetadata()
  smtpReplyCode: string;

  @SpeakeasyMetadata()
  statusCode?: string;

  @SpeakeasyMetadata()
  topicArn?: string;
}
