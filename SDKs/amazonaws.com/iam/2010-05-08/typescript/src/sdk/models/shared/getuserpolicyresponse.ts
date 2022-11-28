import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetUserPolicyResponse
/** 
 * Contains the response to a successful <a>GetUserPolicy</a> request. 
**/
export class GetUserPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policyDocument: string;

  @SpeakeasyMetadata()
  policyName: string;

  @SpeakeasyMetadata()
  userName: string;
}
