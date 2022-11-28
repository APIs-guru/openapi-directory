import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyVersion } from "./policyversion";
/**
 * Contains the response to a successful <a>ListPolicyVersions</a> request.
**/
export declare class ListPolicyVersionsResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    versions?: PolicyVersion[];
}
