import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=datastorePartitions" })
  datastorePartitions?: DatastorePartitions;

  @Metadata({ data: "json, name=fileFormatConfiguration" })
  fileFormatConfiguration?: FileFormatConfiguration;

  @Metadata({ data: "json, name=lastMessageArrivalTime" })
  lastMessageArrivalTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=retentionPeriod" })
  retentionPeriod?: RetentionPeriod;

  @Metadata({ data: "json, name=status" })
  status?: DatastoreStatusEnum;

  @Metadata({ data: "json, name=storage" })
  storage?: DatastoreStorage;
}
