import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Evaluation } from "./evaluation";


// PutEvaluationsResponse
/** 
 * <p/>
**/
export class PutEvaluationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedEvaluations", elemType: shared.Evaluation })
  failedEvaluations?: Evaluation[];
}
