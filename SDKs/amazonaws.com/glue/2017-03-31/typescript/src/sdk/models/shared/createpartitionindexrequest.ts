import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartitionIndex } from "./partitionindex";



export class CreatePartitionIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionIndex" })
  partitionIndex: PartitionIndex;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
