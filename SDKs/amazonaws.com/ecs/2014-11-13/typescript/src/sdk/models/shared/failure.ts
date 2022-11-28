import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Failure
/** 
 * A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
**/
export class Failure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
