import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
/**
 * Contains the response to a successful <a>ListAttachedUserPolicies</a> request.
**/
export declare class ListAttachedUserPoliciesResponse extends SpeakeasyBase {
    attachedPolicies?: AttachedPolicy[];
    isTruncated?: boolean;
    marker?: string;
}
