import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingRuleSet } from "./matchmakingruleset";



// DescribeMatchmakingRuleSetsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeMatchmakingRuleSetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleSets", elemType: MatchmakingRuleSet })
  ruleSets: MatchmakingRuleSet[];
}
