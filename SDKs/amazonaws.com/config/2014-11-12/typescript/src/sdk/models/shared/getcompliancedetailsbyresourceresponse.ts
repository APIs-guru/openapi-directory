import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResult } from "./evaluationresult";



// GetComplianceDetailsByResourceResponse
/** 
 * <p/>
**/
export class GetComplianceDetailsByResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationResults", elemType: EvaluationResult })
  evaluationResults?: EvaluationResult[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
