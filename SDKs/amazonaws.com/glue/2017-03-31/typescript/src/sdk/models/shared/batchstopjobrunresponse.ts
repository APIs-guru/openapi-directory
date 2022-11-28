import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchStopJobRunError } from "./batchstopjobrunerror";
import { BatchStopJobRunSuccessfulSubmission } from "./batchstopjobrunsuccessfulsubmission";



export class BatchStopJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: BatchStopJobRunError })
  errors?: BatchStopJobRunError[];

  @SpeakeasyMetadata({ data: "json, name=SuccessfulSubmissions", elemType: BatchStopJobRunSuccessfulSubmission })
  successfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];
}
