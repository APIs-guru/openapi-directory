import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Record } from "./record";
/**
 * Returned for a successful ListRecordsRequest.
**/
export declare class ListRecordsResponse extends SpeakeasyBase {
    count?: number;
    datasetDeletedAfterRequestedSyncCount?: boolean;
    datasetExists?: boolean;
    datasetSyncCount?: number;
    lastModifiedBy?: string;
    mergedDatasetNames?: string[];
    nextToken?: string;
    records?: Record[];
    syncSessionToken?: string;
}
