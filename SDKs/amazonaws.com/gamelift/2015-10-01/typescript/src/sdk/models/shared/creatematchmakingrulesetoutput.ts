import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MatchmakingRuleSet } from "./matchmakingruleset";


// CreateMatchmakingRuleSetOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class CreateMatchmakingRuleSetOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuleSet" })
  ruleSet: MatchmakingRuleSet;
}
