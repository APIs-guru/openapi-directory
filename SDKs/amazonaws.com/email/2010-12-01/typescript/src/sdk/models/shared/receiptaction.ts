import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddHeaderAction } from "./addheaderaction";
import { BounceAction } from "./bounceaction";
import { LambdaAction } from "./lambdaaction";
import { S3Action } from "./s3action";
import { SnsAction } from "./snsaction";
import { StopAction } from "./stopaction";
import { WorkmailAction } from "./workmailaction";



// ReceiptAction
/** 
 * <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
**/
export class ReceiptAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addHeaderAction?: AddHeaderAction;

  @SpeakeasyMetadata()
  bounceAction?: BounceAction;

  @SpeakeasyMetadata()
  lambdaAction?: LambdaAction;

  @SpeakeasyMetadata()
  s3Action?: S3Action;

  @SpeakeasyMetadata()
  snsAction?: SnsAction;

  @SpeakeasyMetadata()
  stopAction?: StopAction;

  @SpeakeasyMetadata()
  workmailAction?: WorkmailAction;
}
