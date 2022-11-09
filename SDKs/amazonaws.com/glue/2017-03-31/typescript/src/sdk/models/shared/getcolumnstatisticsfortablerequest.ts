import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetColumnStatisticsForTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ColumnNames" })
  columnNames: string[];

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
