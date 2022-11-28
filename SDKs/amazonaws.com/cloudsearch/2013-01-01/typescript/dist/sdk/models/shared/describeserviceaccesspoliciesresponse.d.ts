import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";
/**
 * The result of a <code>DescribeServiceAccessPolicies</code> request.
**/
export declare class DescribeServiceAccessPoliciesResponse extends SpeakeasyBase {
    accessPolicies: AccessPoliciesStatus;
}
