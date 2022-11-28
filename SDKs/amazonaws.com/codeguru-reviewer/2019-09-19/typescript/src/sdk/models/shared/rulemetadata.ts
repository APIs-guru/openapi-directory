import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuleMetadata
/** 
 * Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.
**/
export class RuleMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LongDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleId" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleName" })
  ruleName?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleTags" })
  ruleTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=ShortDescription" })
  shortDescription?: string;
}
