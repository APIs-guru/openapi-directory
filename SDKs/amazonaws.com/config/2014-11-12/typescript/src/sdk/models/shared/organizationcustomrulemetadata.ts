import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
import { OrganizationConfigRuleTriggerTypeEnum } from "./organizationconfigruletriggertypeenum";


// OrganizationCustomRuleMetadata
/** 
 * An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
**/
export class OrganizationCustomRuleMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=InputParameters" })
  inputParameters?: string;

  @Metadata({ data: "json, name=LambdaFunctionArn" })
  lambdaFunctionArn: string;

  @Metadata({ data: "json, name=MaximumExecutionFrequency" })
  maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;

  @Metadata({ data: "json, name=OrganizationConfigRuleTriggerTypes" })
  organizationConfigRuleTriggerTypes: OrganizationConfigRuleTriggerTypeEnum[];

  @Metadata({ data: "json, name=ResourceIdScope" })
  resourceIdScope?: string;

  @Metadata({ data: "json, name=ResourceTypesScope" })
  resourceTypesScope?: string[];

  @Metadata({ data: "json, name=TagKeyScope" })
  tagKeyScope?: string;

  @Metadata({ data: "json, name=TagValueScope" })
  tagValueScope?: string;
}
