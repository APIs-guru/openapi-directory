import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackfillError } from "./backfillerror";
import { PartitionIndexStatusEnum } from "./partitionindexstatusenum";
import { KeySchemaElement } from "./keyschemaelement";


// PartitionIndexDescriptor
/** 
 * A descriptor for a partition index in a table.
**/
export class PartitionIndexDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackfillErrors", elemType: shared.BackfillError })
  backfillErrors?: BackfillError[];

  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=IndexStatus" })
  indexStatus: PartitionIndexStatusEnum;

  @Metadata({ data: "json, name=Keys", elemType: shared.KeySchemaElement })
  keys: KeySchemaElement[];
}
