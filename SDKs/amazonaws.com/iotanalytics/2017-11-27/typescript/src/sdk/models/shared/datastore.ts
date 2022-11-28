import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastorePartitions } from "./datastorepartitions";
import { FileFormatConfiguration } from "./fileformatconfiguration";
import { RetentionPeriod } from "./retentionperiod";
import { DatastoreStatusEnum } from "./datastorestatusenum";
import { DatastoreStorage } from "./datastorestorage";



// Datastore
/** 
 * Information about a data store.
**/
export class Datastore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=datastorePartitions" })
  datastorePartitions?: DatastorePartitions;

  @SpeakeasyMetadata({ data: "json, name=fileFormatConfiguration" })
  fileFormatConfiguration?: FileFormatConfiguration;

  @SpeakeasyMetadata({ data: "json, name=lastMessageArrivalTime" })
  lastMessageArrivalTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DatastoreStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=storage" })
  storage?: DatastoreStorage;
}
