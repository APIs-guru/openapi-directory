import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatastorePartition } from "./datastorepartition";


// DatastorePartitions
/** 
 *  Contains information about the partition dimensions in a data store. 
**/
export class DatastorePartitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=partitions", elemType: shared.DatastorePartition })
  partitions?: DatastorePartition[];
}
