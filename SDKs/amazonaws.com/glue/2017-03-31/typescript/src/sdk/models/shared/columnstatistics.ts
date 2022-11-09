import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnStatisticsData } from "./columnstatisticsdata";


// ColumnStatistics
/** 
 * Represents the generated column-level statistics for a table or partition.
**/
export class ColumnStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalyzedTime" })
  analyzedTime: Date;

  @Metadata({ data: "json, name=ColumnName" })
  columnName: string;

  @Metadata({ data: "json, name=ColumnType" })
  columnType: string;

  @Metadata({ data: "json, name=StatisticsData" })
  statisticsData: ColumnStatisticsData;
}
