import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";



// DescribeServiceAccessPoliciesResponse
/** 
 * A response message that contains the access policies for a domain.
**/
export class DescribeServiceAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessPolicies: AccessPoliciesStatus;
}
