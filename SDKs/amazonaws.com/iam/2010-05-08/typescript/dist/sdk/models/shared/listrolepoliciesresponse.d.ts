import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a successful <a>ListRolePolicies</a> request.
**/
export declare class ListRolePoliciesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    policyNames: string[];
}
