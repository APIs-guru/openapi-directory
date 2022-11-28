import { SpeakeasyBase } from "../../../internal/utils";
import { PredictorExecution } from "./predictorexecution";
/**
 * Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation.
**/
export declare class PredictorExecutionDetails extends SpeakeasyBase {
    predictorExecutions?: PredictorExecution[];
}
