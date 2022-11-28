import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestWindowSummary } from "./testwindowsummary";



// PredictorExecution
/** 
 * The algorithm used to perform a backtest and the status of those tests.
**/
export class PredictorExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmArn" })
  algorithmArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TestWindows", elemType: TestWindowSummary })
  testWindows?: TestWindowSummary[];
}
