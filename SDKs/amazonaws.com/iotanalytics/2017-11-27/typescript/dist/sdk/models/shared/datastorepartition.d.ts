import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Partition } from "./partition";
import { TimestampPartition } from "./timestamppartition";
/**
 *  A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>.
**/
export declare class DatastorePartition extends SpeakeasyBase {
    attributePartition?: Partition;
    timestampPartition?: TimestampPartition;
}
