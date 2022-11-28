import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetGroupPolicyResponse
/** 
 * Contains the response to a successful <a>GetGroupPolicy</a> request. 
**/
export class GetGroupPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupName: string;

  @SpeakeasyMetadata()
  policyDocument: string;

  @SpeakeasyMetadata()
  policyName: string;
}
