import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule.
**/
export declare class RuleMetadata extends SpeakeasyBase {
    longDescription?: string;
    ruleId?: string;
    ruleName?: string;
    ruleTags?: string[];
    shortDescription?: string;
}
