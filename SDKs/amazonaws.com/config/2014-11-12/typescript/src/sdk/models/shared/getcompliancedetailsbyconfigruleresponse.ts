import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EvaluationResult } from "./evaluationresult";


// GetComplianceDetailsByConfigRuleResponse
/** 
 * <p/>
**/
export class GetComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationResults", elemType: shared.EvaluationResult })
  evaluationResults?: EvaluationResult[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
