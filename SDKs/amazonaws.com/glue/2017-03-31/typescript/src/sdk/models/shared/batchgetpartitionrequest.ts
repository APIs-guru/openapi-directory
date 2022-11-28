import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionValueList } from "./partitionvaluelist";



export class BatchGetPartitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionsToGet", elemType: PartitionValueList })
  partitionsToGet: PartitionValueList[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
