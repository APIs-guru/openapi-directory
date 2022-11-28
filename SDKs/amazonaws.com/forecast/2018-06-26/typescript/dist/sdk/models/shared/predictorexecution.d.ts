import { SpeakeasyBase } from "../../../internal/utils";
import { TestWindowSummary } from "./testwindowsummary";
/**
 * The algorithm used to perform a backtest and the status of those tests.
**/
export declare class PredictorExecution extends SpeakeasyBase {
    algorithmArn?: string;
    testWindows?: TestWindowSummary[];
}
