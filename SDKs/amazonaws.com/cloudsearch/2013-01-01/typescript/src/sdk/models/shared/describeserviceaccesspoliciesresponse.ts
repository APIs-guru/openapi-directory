import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";



// DescribeServiceAccessPoliciesResponse
/** 
 * The result of a <code>DescribeServiceAccessPolicies</code> request.
**/
export class DescribeServiceAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessPolicies: AccessPoliciesStatus;
}
