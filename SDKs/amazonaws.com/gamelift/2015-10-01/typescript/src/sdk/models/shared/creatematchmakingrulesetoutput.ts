import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingRuleSet } from "./matchmakingruleset";



// CreateMatchmakingRuleSetOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateMatchmakingRuleSetOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuleSet" })
  ruleSet: MatchmakingRuleSet;
}
