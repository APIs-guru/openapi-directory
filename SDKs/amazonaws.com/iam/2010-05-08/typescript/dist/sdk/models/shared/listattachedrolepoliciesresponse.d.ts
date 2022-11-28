import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
/**
 * Contains the response to a successful <a>ListAttachedRolePolicies</a> request.
**/
export declare class ListAttachedRolePoliciesResponse extends SpeakeasyBase {
    attachedPolicies?: AttachedPolicy[];
    isTruncated?: boolean;
    marker?: string;
}
