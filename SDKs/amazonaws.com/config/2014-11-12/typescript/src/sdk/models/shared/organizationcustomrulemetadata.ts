import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";
import { OrganizationConfigRuleTriggerTypeEnum } from "./organizationconfigruletriggertypeenum";



// OrganizationCustomRuleMetadata
/** 
 * An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
**/
export class OrganizationCustomRuleMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=InputParameters" })
  inputParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=LambdaFunctionArn" })
  lambdaFunctionArn: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumExecutionFrequency" })
  maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConfigRuleTriggerTypes" })
  organizationConfigRuleTriggerTypes: OrganizationConfigRuleTriggerTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=ResourceIdScope" })
  resourceIdScope?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceTypesScope" })
  resourceTypesScope?: string[];

  @SpeakeasyMetadata({ data: "json, name=TagKeyScope" })
  tagKeyScope?: string;

  @SpeakeasyMetadata({ data: "json, name=TagValueScope" })
  tagValueScope?: string;
}
