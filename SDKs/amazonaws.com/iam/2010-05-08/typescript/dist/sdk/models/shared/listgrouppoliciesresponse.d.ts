import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a successful <a>ListGroupPolicies</a> request.
**/
export declare class ListGroupPoliciesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    policyNames: string[];
}
