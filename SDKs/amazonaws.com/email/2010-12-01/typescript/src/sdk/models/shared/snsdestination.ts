import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnsDestination
/** 
 * <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
**/
export class SnsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata()
  topicArn: string;
}
