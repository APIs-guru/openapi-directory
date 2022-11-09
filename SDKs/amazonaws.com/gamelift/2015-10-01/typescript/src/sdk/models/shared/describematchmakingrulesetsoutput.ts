import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchmakingRuleSet } from "./matchmakingruleset";


// DescribeMatchmakingRuleSetsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeMatchmakingRuleSetsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=RuleSets", elemType: shared.MatchmakingRuleSet })
  ruleSets: MatchmakingRuleSet[];
}
