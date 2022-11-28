import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchRetryStrategy
/** 
 * The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
**/
export class BatchRetryStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attempts" })
  attempts?: number;
}
