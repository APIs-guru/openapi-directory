import { SpeakeasyBase } from "../../../internal/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
/**
 * An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
**/
export declare class OrganizationManagedRuleMetadata extends SpeakeasyBase {
    description?: string;
    inputParameters?: string;
    maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;
    resourceIdScope?: string;
    resourceTypesScope?: string[];
    ruleIdentifier: string;
    tagKeyScope?: string;
    tagValueScope?: string;
}
