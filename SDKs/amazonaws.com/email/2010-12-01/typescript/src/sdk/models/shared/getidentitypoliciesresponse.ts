import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetIdentityPoliciesResponse
/** 
 * Represents the requested sending authorization policies.
**/
export class GetIdentityPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  policies: Map<string, string>;
}
