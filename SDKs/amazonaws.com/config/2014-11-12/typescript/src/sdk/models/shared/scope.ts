import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Scope
/** 
 * Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
**/
export class Scope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceResourceId" })
  complianceResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceResourceTypes" })
  complianceResourceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=TagKey" })
  tagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=TagValue" })
  tagValue?: string;
}
