import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuleMetadata
/** 
 * Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.
**/
export class RuleMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=LongDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=RuleId" })
  ruleId?: string;

  @Metadata({ data: "json, name=RuleName" })
  ruleName?: string;

  @Metadata({ data: "json, name=RuleTags" })
  ruleTags?: string[];

  @Metadata({ data: "json, name=ShortDescription" })
  shortDescription?: string;
}
