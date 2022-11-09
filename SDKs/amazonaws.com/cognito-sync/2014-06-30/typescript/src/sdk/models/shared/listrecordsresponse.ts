import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Record } from "./record";


// ListRecordsResponse
/** 
 * Returned for a successful ListRecordsRequest.
**/
export class ListRecordsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=DatasetDeletedAfterRequestedSyncCount" })
  datasetDeletedAfterRequestedSyncCount?: boolean;

  @Metadata({ data: "json, name=DatasetExists" })
  datasetExists?: boolean;

  @Metadata({ data: "json, name=DatasetSyncCount" })
  datasetSyncCount?: number;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: string;

  @Metadata({ data: "json, name=MergedDatasetNames" })
  mergedDatasetNames?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Records", elemType: shared.Record })
  records?: Record[];

  @Metadata({ data: "json, name=SyncSessionToken" })
  syncSessionToken?: string;
}
