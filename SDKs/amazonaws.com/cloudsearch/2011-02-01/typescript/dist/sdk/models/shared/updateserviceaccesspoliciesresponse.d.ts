import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPoliciesStatus } from "./accesspoliciesstatus";
/**
 * A response message that contains the status of updated access policies.
**/
export declare class UpdateServiceAccessPoliciesResponse extends SpeakeasyBase {
    accessPolicies: AccessPoliciesStatus;
}
