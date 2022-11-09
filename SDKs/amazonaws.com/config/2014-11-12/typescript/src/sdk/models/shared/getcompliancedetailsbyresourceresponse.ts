import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EvaluationResult } from "./evaluationresult";


// GetComplianceDetailsByResourceResponse
/** 
 * <p/>
**/
export class GetComplianceDetailsByResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationResults", elemType: shared.EvaluationResult })
  evaluationResults?: EvaluationResult[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
