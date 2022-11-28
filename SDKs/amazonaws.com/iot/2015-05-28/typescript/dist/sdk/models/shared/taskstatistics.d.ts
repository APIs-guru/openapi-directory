import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics for the checks performed during the audit.
**/
export declare class TaskStatistics extends SpeakeasyBase {
    canceledChecks?: number;
    compliantChecks?: number;
    failedChecks?: number;
    inProgressChecks?: number;
    nonCompliantChecks?: number;
    totalChecks?: number;
    waitingForDataCollectionChecks?: number;
}
