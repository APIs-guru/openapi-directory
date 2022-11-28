import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process.
**/
export declare class DataRepositoryTaskStatus extends SpeakeasyBase {
    failedCount?: number;
    lastUpdatedTime?: Date;
    succeededCount?: number;
    totalCount?: number;
}
