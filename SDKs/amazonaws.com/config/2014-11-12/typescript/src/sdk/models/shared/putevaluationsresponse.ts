import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Evaluation } from "./evaluation";



// PutEvaluationsResponse
/** 
 * <p/>
**/
export class PutEvaluationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedEvaluations", elemType: Evaluation })
  failedEvaluations?: Evaluation[];
}
