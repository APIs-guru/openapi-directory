import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EvaluateOnExit } from "./evaluateonexit";
/**
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export declare class RetryStrategy extends SpeakeasyBase {
    attempts?: number;
    evaluateOnExit?: EvaluateOnExit[];
}
