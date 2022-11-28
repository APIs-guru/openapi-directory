import { SpeakeasyBase } from "../../../internal/utils";
import { MatchmakingRuleSet } from "./matchmakingruleset";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeMatchmakingRuleSetsOutput extends SpeakeasyBase {
    nextToken?: string;
    ruleSets: MatchmakingRuleSet[];
}
