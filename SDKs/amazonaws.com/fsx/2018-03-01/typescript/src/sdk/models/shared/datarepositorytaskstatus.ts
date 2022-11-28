import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataRepositoryTaskStatus
/** 
 * Provides the task status showing a running total of the total number of files to be processed, the number successfully processed, and the number of files the task failed to process.
**/
export class DataRepositoryTaskStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedCount" })
  failedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SucceededCount" })
  succeededCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
