import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";
/**
 * The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.
**/
export declare class UpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
    accessPolicies: AccessPoliciesStatus;
}
