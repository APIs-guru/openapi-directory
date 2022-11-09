import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteColumnStatisticsForTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ColumnName" })
  columnName: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
