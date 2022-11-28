import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";



// UpdateServiceAccessPoliciesResponse
/** 
 * The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.
**/
export class UpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessPolicies: AccessPoliciesStatus;
}
