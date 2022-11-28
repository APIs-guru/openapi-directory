import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";



// ListRecordsResponse
/** 
 * Returned for a successful ListRecordsRequest.
**/
export class ListRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=DatasetDeletedAfterRequestedSyncCount" })
  datasetDeletedAfterRequestedSyncCount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DatasetExists" })
  datasetExists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DatasetSyncCount" })
  datasetSyncCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=MergedDatasetNames" })
  mergedDatasetNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: Record })
  records?: Record[];

  @SpeakeasyMetadata({ data: "json, name=SyncSessionToken" })
  syncSessionToken?: string;
}
