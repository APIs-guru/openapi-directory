import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyToPath } from "./policytopath";
export declare class LookupPolicyResponse extends SpeakeasyBase {
    nextToken?: string;
    policyToPathList?: PolicyToPath[];
}
