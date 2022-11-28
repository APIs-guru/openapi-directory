import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStopJobRunError } from "./batchstopjobrunerror";
import { BatchStopJobRunSuccessfulSubmission } from "./batchstopjobrunsuccessfulsubmission";
export declare class BatchStopJobRunResponse extends SpeakeasyBase {
    errors?: BatchStopJobRunError[];
    successfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];
}
