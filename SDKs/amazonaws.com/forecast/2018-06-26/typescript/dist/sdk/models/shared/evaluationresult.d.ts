import { SpeakeasyBase } from "../../../internal/utils";
import { WindowSummary } from "./windowsummary";
/**
 * The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.
**/
export declare class EvaluationResult extends SpeakeasyBase {
    algorithmArn?: string;
    testWindows?: WindowSummary[];
}
