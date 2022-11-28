import { SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
/**
 * Contains the response to a successful <a>ListPolicies</a> request.
**/
export declare class ListPoliciesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    policies?: Policy[];
}
