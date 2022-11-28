import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyToPath } from "./policytopath";
/**
 * Represents the output of a <a>LookupPolicy</a> response operation.
**/
export declare class BatchLookupPolicyResponse extends SpeakeasyBase {
    nextToken?: string;
    policyToPathList?: PolicyToPath[];
}
