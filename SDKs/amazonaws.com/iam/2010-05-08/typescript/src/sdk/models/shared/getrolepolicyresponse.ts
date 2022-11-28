import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetRolePolicyResponse
/** 
 * Contains the response to a successful <a>GetRolePolicy</a> request. 
**/
export class GetRolePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policyDocument: string;

  @SpeakeasyMetadata()
  policyName: string;

  @SpeakeasyMetadata()
  roleName: string;
}
