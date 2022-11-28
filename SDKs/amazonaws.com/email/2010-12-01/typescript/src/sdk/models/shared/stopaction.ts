import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StopScopeEnum } from "./stopscopeenum";



// StopAction
/** 
 * <p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p>
**/
export class StopAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  scope: StopScopeEnum;

  @SpeakeasyMetadata()
  topicArn?: string;
}
