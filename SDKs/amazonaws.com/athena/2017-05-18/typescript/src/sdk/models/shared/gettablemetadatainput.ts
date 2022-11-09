import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTableMetadataInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogName" })
  catalogName: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
