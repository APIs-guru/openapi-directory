import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.
**/
export declare class QueryExecutionStatistics extends SpeakeasyBase {
    dataManifestLocation?: string;
    dataScannedInBytes?: number;
    engineExecutionTimeInMillis?: number;
    queryPlanningTimeInMillis?: number;
    queryQueueTimeInMillis?: number;
    serviceProcessingTimeInMillis?: number;
    totalExecutionTimeInMillis?: number;
}
