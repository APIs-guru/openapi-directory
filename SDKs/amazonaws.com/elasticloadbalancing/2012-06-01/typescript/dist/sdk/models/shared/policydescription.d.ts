import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyAttributeDescription } from "./policyattributedescription";
/**
 * Information about a policy.
**/
export declare class PolicyDescription extends SpeakeasyBase {
    policyAttributeDescriptions?: PolicyAttributeDescription[];
    policyName?: string;
    policyTypeName?: string;
}
