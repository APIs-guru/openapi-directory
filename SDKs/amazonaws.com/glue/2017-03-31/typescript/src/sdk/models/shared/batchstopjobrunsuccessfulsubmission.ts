import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchStopJobRunSuccessfulSubmission
/** 
 * Records a successful request to stop a specified <code>JobRun</code>.
**/
export class BatchStopJobRunSuccessfulSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobRunId" })
  jobRunId?: string;
}
