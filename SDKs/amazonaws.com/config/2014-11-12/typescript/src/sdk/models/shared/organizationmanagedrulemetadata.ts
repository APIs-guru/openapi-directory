import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MaximumExecutionFrequencyEnum } from "./maximumexecutionfrequencyenum";


// OrganizationManagedRuleMetadata
/** 
 * An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
**/
export class OrganizationManagedRuleMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=InputParameters" })
  inputParameters?: string;

  @Metadata({ data: "json, name=MaximumExecutionFrequency" })
  maximumExecutionFrequency?: MaximumExecutionFrequencyEnum;

  @Metadata({ data: "json, name=ResourceIdScope" })
  resourceIdScope?: string;

  @Metadata({ data: "json, name=ResourceTypesScope" })
  resourceTypesScope?: string[];

  @Metadata({ data: "json, name=RuleIdentifier" })
  ruleIdentifier: string;

  @Metadata({ data: "json, name=TagKeyScope" })
  tagKeyScope?: string;

  @Metadata({ data: "json, name=TagValueScope" })
  tagValueScope?: string;
}
