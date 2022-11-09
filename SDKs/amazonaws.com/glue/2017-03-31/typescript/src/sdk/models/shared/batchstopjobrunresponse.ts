import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchStopJobRunError } from "./batchstopjobrunerror";
import { BatchStopJobRunSuccessfulSubmission } from "./batchstopjobrunsuccessfulsubmission";


export class BatchStopJobRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Errors", elemType: shared.BatchStopJobRunError })
  errors?: BatchStopJobRunError[];

  @Metadata({ data: "json, name=SuccessfulSubmissions", elemType: shared.BatchStopJobRunSuccessfulSubmission })
  successfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];
}
