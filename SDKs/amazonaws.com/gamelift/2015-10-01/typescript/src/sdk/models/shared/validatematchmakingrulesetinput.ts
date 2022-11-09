import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValidateMatchmakingRuleSetInput
/** 
 * Represents the input for a request operation.
**/
export class ValidateMatchmakingRuleSetInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleSetBody" })
  ruleSetBody: string;
}
