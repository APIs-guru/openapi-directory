import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WindowSummary } from "./windowsummary";


// EvaluationResult
/** 
 * The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.
**/
export class EvaluationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmArn" })
  algorithmArn?: string;

  @Metadata({ data: "json, name=TestWindows", elemType: shared.WindowSummary })
  testWindows?: WindowSummary[];
}
