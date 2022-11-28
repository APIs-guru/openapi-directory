import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The job process details.
**/
export declare class JobProcessDetails extends SpeakeasyBase {
    numberOfCanceledThings?: number;
    numberOfFailedThings?: number;
    numberOfInProgressThings?: number;
    numberOfQueuedThings?: number;
    numberOfRejectedThings?: number;
    numberOfRemovedThings?: number;
    numberOfSucceededThings?: number;
    numberOfTimedOutThings?: number;
    processingTargets?: string[];
}
