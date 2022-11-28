import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigRuleEvaluationStatus } from "./configruleevaluationstatus";
/**
 * <p/>
**/
export declare class DescribeConfigRuleEvaluationStatusResponse extends SpeakeasyBase {
    configRulesEvaluationStatus?: ConfigRuleEvaluationStatus[];
    nextToken?: string;
}
