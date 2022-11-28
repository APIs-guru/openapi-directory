import { SpeakeasyBase } from "../../../internal/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
import { OrganizationConfigRuleTriggerTypeEnum } from "./organizationconfigruletriggertypeenum";
/**
 * An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
**/
export declare class OrganizationCustomRuleMetadata extends SpeakeasyBase {
    description?: string;
    inputParameters?: string;
    lambdaFunctionArn: string;
    maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;
    organizationConfigRuleTriggerTypes: OrganizationConfigRuleTriggerTypeEnum[];
    resourceIdScope?: string;
    resourceTypesScope?: string[];
    tagKeyScope?: string;
    tagValueScope?: string;
}
