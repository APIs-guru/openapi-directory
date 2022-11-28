import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyAttributeTypeDescription } from "./policyattributetypedescription";
/**
 * Information about a policy type.
**/
export declare class PolicyTypeDescription extends SpeakeasyBase {
    description?: string;
    policyAttributeTypeDescriptions?: PolicyAttributeTypeDescription[];
    policyTypeName?: string;
}
