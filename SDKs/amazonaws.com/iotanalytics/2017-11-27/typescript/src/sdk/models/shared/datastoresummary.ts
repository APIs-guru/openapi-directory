import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastorePartitions } from "./datastorepartitions";
import { DatastoreStorageSummary } from "./datastorestoragesummary";
import { FileFormatTypeEnum } from "./fileformattypeenum";
import { DatastoreStatusEnum } from "./datastorestatusenum";



// DatastoreSummary
/** 
 * A summary of information about a data store.
**/
export class DatastoreSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datastoreName" })
  datastoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=datastorePartitions" })
  datastorePartitions?: DatastorePartitions;

  @SpeakeasyMetadata({ data: "json, name=datastoreStorage" })
  datastoreStorage?: DatastoreStorageSummary;

  @SpeakeasyMetadata({ data: "json, name=fileFormatType" })
  fileFormatType?: FileFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lastMessageArrivalTime" })
  lastMessageArrivalTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DatastoreStatusEnum;
}
