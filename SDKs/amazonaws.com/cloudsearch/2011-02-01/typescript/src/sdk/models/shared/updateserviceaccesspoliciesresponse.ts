import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";



// UpdateServiceAccessPoliciesResponse
/** 
 * A response message that contains the status of updated access policies.
**/
export class UpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessPolicies: AccessPoliciesStatus;
}
