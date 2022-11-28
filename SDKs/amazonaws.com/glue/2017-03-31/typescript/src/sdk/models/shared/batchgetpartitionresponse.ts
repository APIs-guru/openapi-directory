import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
import { PartitionValueList } from "./partitionvaluelist";



export class BatchGetPartitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Partitions", elemType: Partition })
  partitions?: Partition[];

  @SpeakeasyMetadata({ data: "json, name=UnprocessedKeys", elemType: PartitionValueList })
  unprocessedKeys?: PartitionValueList[];
}
