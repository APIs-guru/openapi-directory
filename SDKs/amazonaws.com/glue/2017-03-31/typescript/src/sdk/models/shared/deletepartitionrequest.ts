import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePartitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionValues" })
  partitionValues: string[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
