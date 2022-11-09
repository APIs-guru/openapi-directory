import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Partition } from "./partition";
import { TimestampPartition } from "./timestamppartition";


// DatastorePartition
/** 
 *  A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>. 
**/
export class DatastorePartition extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributePartition" })
  attributePartition?: Partition;

  @Metadata({ data: "json, name=timestampPartition" })
  timestampPartition?: TimestampPartition;
}
