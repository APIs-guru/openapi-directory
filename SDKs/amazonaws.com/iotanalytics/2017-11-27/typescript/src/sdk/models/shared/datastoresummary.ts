import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastorePartitions } from "./datastorepartitions";
import { DatastoreStorageSummary } from "./datastorestoragesummary";
import { FileFormatTypeEnum } from "./fileformattypeenum";
import { DatastoreStatusEnum } from "./datastorestatusenum";


// DatastoreSummary
/** 
 * A summary of information about a data store.
**/
export class DatastoreSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=datastoreName" })
  datastoreName?: string;

  @Metadata({ data: "json, name=datastorePartitions" })
  datastorePartitions?: DatastorePartitions;

  @Metadata({ data: "json, name=datastoreStorage" })
  datastoreStorage?: DatastoreStorageSummary;

  @Metadata({ data: "json, name=fileFormatType" })
  fileFormatType?: FileFormatTypeEnum;

  @Metadata({ data: "json, name=lastMessageArrivalTime" })
  lastMessageArrivalTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: DatastoreStatusEnum;
}
