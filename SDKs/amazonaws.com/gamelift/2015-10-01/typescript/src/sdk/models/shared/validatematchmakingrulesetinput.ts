import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValidateMatchmakingRuleSetInput
/** 
 * Represents the input for a request operation.
**/
export class ValidateMatchmakingRuleSetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleSetBody" })
  ruleSetBody: string;
}
