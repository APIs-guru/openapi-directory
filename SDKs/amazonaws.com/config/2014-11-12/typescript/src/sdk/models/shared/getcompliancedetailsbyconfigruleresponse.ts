import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResult } from "./evaluationresult";



// GetComplianceDetailsByConfigRuleResponse
/** 
 * <p/>
**/
export class GetComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationResults", elemType: EvaluationResult })
  evaluationResults?: EvaluationResult[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
