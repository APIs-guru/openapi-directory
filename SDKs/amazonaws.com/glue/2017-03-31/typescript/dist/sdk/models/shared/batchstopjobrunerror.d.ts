import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
/**
 * Records an error that occurred when attempting to stop a specified job run.
**/
export declare class BatchStopJobRunError extends SpeakeasyBase {
    errorDetail?: ErrorDetail;
    jobName?: string;
    jobRunId?: string;
}
