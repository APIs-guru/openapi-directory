import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatistics } from "./columnstatistics";



export class UpdateColumnStatisticsForPartitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=ColumnStatisticsList", elemType: ColumnStatistics })
  columnStatisticsList: ColumnStatistics[];

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=PartitionValues" })
  partitionValues: string[];

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
