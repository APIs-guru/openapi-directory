import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";



// OrganizationManagedRuleMetadata
/** 
 * An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
**/
export class OrganizationManagedRuleMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=InputParameters" })
  inputParameters?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumExecutionFrequency" })
  maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceIdScope" })
  resourceIdScope?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceTypesScope" })
  resourceTypesScope?: string[];

  @SpeakeasyMetadata({ data: "json, name=RuleIdentifier" })
  ruleIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeyScope" })
  tagKeyScope?: string;

  @SpeakeasyMetadata({ data: "json, name=TagValueScope" })
  tagValueScope?: string;
}
