import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Relevant metrics on input records processed during bulk deployment.
**/
export declare class BulkDeploymentMetrics extends SpeakeasyBase {
    invalidInputRecords?: number;
    recordsProcessed?: number;
    retryAttempts?: number;
}
