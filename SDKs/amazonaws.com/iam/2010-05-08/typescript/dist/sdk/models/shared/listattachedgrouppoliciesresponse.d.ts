import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
/**
 * Contains the response to a successful <a>ListAttachedGroupPolicies</a> request.
**/
export declare class ListAttachedGroupPoliciesResponse extends SpeakeasyBase {
    attachedPolicies?: AttachedPolicy[];
    isTruncated?: boolean;
    marker?: string;
}
