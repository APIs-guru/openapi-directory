import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
**/
export declare class Scope extends SpeakeasyBase {
    complianceResourceId?: string;
    complianceResourceTypes?: string[];
    tagKey?: string;
    tagValue?: string;
}
