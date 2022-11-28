import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WindowSummary } from "./windowsummary";



// EvaluationResult
/** 
 * The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.
**/
export class EvaluationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmArn" })
  algorithmArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TestWindows", elemType: WindowSummary })
  testWindows?: WindowSummary[];
}
