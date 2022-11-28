import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PolicyDetail
/** 
 * <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
export class PolicyDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policyDocument?: string;

  @SpeakeasyMetadata()
  policyName?: string;
}
