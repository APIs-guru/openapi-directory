import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionValueList } from "./partitionvaluelist";



export class BatchDeletePartitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionsToDelete", elemType: PartitionValueList })
  partitionsToDelete: PartitionValueList[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
