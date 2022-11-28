import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackfillError } from "./backfillerror";
import { PartitionIndexStatusEnum } from "./partitionindexstatusenum";
import { KeySchemaElement } from "./keyschemaelement";



// PartitionIndexDescriptor
/** 
 * A descriptor for a partition index in a table.
**/
export class PartitionIndexDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackfillErrors", elemType: BackfillError })
  backfillErrors?: BackfillError[];

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=IndexStatus" })
  indexStatus: PartitionIndexStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: KeySchemaElement })
  keys: KeySchemaElement[];
}
