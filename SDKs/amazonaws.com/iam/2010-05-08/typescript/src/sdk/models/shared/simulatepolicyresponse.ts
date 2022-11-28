import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluationResult } from "./evaluationresult";



// SimulatePolicyResponse
/** 
 * Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request.
**/
export class SimulatePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EvaluationResult })
  evaluationResults?: EvaluationResult[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
