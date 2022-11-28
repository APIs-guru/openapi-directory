import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatisticsData } from "./columnstatisticsdata";



// ColumnStatistics
/** 
 * Represents the generated column-level statistics for a table or partition.
**/
export class ColumnStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyzedTime" })
  analyzedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ColumnName" })
  columnName: string;

  @SpeakeasyMetadata({ data: "json, name=ColumnType" })
  columnType: string;

  @SpeakeasyMetadata({ data: "json, name=StatisticsData" })
  statisticsData: ColumnStatisticsData;
}
