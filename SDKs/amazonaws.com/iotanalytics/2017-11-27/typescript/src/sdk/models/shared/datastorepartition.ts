import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
import { TimestampPartition } from "./timestamppartition";



// DatastorePartition
/** 
 *  A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>. 
**/
export class DatastorePartition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributePartition" })
  attributePartition?: Partition;

  @SpeakeasyMetadata({ data: "json, name=timestampPartition" })
  timestampPartition?: TimestampPartition;
}
