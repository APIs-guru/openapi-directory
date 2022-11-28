import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchStopJobRunSuccessfulSubmission
/** 
 * Records a successful request to stop a specified <code>JobRun</code>.
**/
export class BatchStopJobRunSuccessfulSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobRunId" })
  jobRunId?: string;
}
