import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Partition } from "./partition";
import { PartitionValueList } from "./partitionvaluelist";


export class BatchGetPartitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Partitions", elemType: shared.Partition })
  partitions?: Partition[];

  @Metadata({ data: "json, name=UnprocessedKeys", elemType: shared.PartitionValueList })
  unprocessedKeys?: PartitionValueList[];
}
