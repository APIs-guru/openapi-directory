import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestWindowSummary } from "./testwindowsummary";


// PredictorExecution
/** 
 * The algorithm used to perform a backtest and the status of those tests.
**/
export class PredictorExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmArn" })
  algorithmArn?: string;

  @Metadata({ data: "json, name=TestWindows", elemType: shared.TestWindowSummary })
  testWindows?: TestWindowSummary[];
}
