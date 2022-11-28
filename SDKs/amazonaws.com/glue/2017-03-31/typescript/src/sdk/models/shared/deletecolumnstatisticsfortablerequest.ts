import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteColumnStatisticsForTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=ColumnName" })
  columnName: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
