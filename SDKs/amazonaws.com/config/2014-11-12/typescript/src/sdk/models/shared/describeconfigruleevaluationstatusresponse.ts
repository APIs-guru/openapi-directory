import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigRuleEvaluationStatus } from "./configruleevaluationstatus";


// DescribeConfigRuleEvaluationStatusResponse
/** 
 * <p/>
**/
export class DescribeConfigRuleEvaluationStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigRulesEvaluationStatus", elemType: shared.ConfigRuleEvaluationStatus })
  configRulesEvaluationStatus?: ConfigRuleEvaluationStatus[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
