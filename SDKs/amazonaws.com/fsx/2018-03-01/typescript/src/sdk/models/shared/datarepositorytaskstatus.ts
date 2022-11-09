import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataRepositoryTaskStatus
/** 
 * Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process.
**/
export class DataRepositoryTaskStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedCount" })
  failedCount?: number;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=SucceededCount" })
  succeededCount?: number;

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
