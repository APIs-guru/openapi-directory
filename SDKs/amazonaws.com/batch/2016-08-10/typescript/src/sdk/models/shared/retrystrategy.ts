import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EvaluateOnExit } from "./evaluateonexit";


// RetryStrategy
/** 
 * The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
**/
export class RetryStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=attempts" })
  attempts?: number;

  @Metadata({ data: "json, name=evaluateOnExit", elemType: shared.EvaluateOnExit })
  evaluateOnExit?: EvaluateOnExit[];
}
