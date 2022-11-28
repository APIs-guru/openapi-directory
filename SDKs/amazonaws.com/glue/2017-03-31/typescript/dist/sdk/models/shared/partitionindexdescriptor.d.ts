import { SpeakeasyBase } from "../../../internal/utils";
import { BackfillError } from "./backfillerror";
import { PartitionIndexStatusEnum } from "./partitionindexstatusenum";
import { KeySchemaElement } from "./keyschemaelement";
/**
 * A descriptor for a partition index in a table.
**/
export declare class PartitionIndexDescriptor extends SpeakeasyBase {
    backfillErrors?: BackfillError[];
    indexName: string;
    indexStatus: PartitionIndexStatusEnum;
    keys: KeySchemaElement[];
}
