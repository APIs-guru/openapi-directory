import { SpeakeasyBase } from "../../../internal/utils";
import { DatastorePartitions } from "./datastorepartitions";
import { DatastoreStorageSummary } from "./datastorestoragesummary";
import { FileFormatTypeEnum } from "./fileformattypeenum";
import { DatastoreStatusEnum } from "./datastorestatusenum";
/**
 * A summary of information about a data store.
**/
export declare class DatastoreSummary extends SpeakeasyBase {
    creationTime?: Date;
    datastoreName?: string;
    datastorePartitions?: DatastorePartitions;
    datastoreStorage?: DatastoreStorageSummary;
    fileFormatType?: FileFormatTypeEnum;
    lastMessageArrivalTime?: Date;
    lastUpdateTime?: Date;
    status?: DatastoreStatusEnum;
}
