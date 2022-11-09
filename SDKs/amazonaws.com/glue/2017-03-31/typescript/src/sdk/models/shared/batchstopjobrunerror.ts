import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetail } from "./errordetail";


// BatchStopJobRunError
/** 
 * Records an error that occurred when attempting to stop a specified job run.
**/
export class BatchStopJobRunError extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @Metadata({ data: "json, name=JobName" })
  jobName?: string;

  @Metadata({ data: "json, name=JobRunId" })
  jobRunId?: string;
}
