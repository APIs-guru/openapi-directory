import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePartitionIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
