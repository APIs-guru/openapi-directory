import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EvaluateOnExit } from "./evaluateonexit";



// RetryStrategy
/** 
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export class RetryStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attempts" })
  attempts?: number;

  @SpeakeasyMetadata({ data: "json, name=evaluateOnExit", elemType: EvaluateOnExit })
  evaluateOnExit?: EvaluateOnExit[];
}
