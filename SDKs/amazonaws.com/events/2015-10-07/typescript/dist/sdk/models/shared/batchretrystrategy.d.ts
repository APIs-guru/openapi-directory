import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
**/
export declare class BatchRetryStrategy extends SpeakeasyBase {
    attempts?: number;
}
