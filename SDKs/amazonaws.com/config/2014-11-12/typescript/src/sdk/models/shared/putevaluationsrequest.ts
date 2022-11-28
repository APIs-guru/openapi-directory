import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Evaluation } from "./evaluation";



// PutEvaluationsRequest
/** 
 * <p/>
**/
export class PutEvaluationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Evaluations", elemType: Evaluation })
  evaluations?: Evaluation[];

  @SpeakeasyMetadata({ data: "json, name=ResultToken" })
  resultToken: string;

  @SpeakeasyMetadata({ data: "json, name=TestMode" })
  testMode?: boolean;
}
