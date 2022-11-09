import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PredictorExecution } from "./predictorexecution";


// PredictorExecutionDetails
/** 
 * Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation.
**/
export class PredictorExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=PredictorExecutions", elemType: shared.PredictorExecution })
  predictorExecutions?: PredictorExecution[];
}
