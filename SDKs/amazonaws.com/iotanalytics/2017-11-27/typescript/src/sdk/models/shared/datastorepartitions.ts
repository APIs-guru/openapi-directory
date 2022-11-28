import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatastorePartition } from "./datastorepartition";



// DatastorePartitions
/** 
 *  Contains information about the partition dimensions in a data store. 
**/
export class DatastorePartitions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partitions", elemType: DatastorePartition })
  partitions?: DatastorePartition[];
}
