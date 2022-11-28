import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a successful <a>ListUserPolicies</a> request.
**/
export declare class ListUserPoliciesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    policyNames: string[];
}
