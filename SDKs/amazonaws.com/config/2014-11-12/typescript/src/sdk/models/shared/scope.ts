import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Scope
/** 
 * Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
**/
export class Scope extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceResourceId" })
  complianceResourceId?: string;

  @Metadata({ data: "json, name=ComplianceResourceTypes" })
  complianceResourceTypes?: string[];

  @Metadata({ data: "json, name=TagKey" })
  tagKey?: string;

  @Metadata({ data: "json, name=TagValue" })
  tagValue?: string;
}
