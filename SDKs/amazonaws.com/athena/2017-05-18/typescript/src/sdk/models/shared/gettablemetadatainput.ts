import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTableMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogName" })
  catalogName: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
