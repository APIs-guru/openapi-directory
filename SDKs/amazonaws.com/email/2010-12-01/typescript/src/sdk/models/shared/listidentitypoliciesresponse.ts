import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListIdentityPoliciesResponse
/** 
 * A list of names of sending authorization policies that apply to an identity.
**/
export class ListIdentityPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policyNames: string[];
}
