import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigRuleEvaluationStatus } from "./configruleevaluationstatus";



// DescribeConfigRuleEvaluationStatusResponse
/** 
 * <p/>
**/
export class DescribeConfigRuleEvaluationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigRulesEvaluationStatus", elemType: ConfigRuleEvaluationStatus })
  configRulesEvaluationStatus?: ConfigRuleEvaluationStatus[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
