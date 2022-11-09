import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Evaluation } from "./evaluation";


// PutEvaluationsRequest
/** 
 * <p/>
**/
export class PutEvaluationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Evaluations", elemType: shared.Evaluation })
  evaluations?: Evaluation[];

  @Metadata({ data: "json, name=ResultToken" })
  resultToken: string;

  @Metadata({ data: "json, name=TestMode" })
  testMode?: boolean;
}
