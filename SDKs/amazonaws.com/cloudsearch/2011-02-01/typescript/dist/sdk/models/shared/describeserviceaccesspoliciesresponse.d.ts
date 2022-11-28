import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";
/**
 * A response message that contains the access policies for a domain.
**/
export declare class DescribeServiceAccessPoliciesResponse extends SpeakeasyBase {
    accessPolicies: AccessPoliciesStatus;
}
