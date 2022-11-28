import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";



// BatchStopJobRunError
/** 
 * Records an error that occurred when attempting to stop a specified job run.
**/
export class BatchStopJobRunError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorDetail" })
  errorDetail?: ErrorDetail;

  @SpeakeasyMetadata({ data: "json, name=JobName" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=JobRunId" })
  jobRunId?: string;
}
