import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatisticsData } from "./columnstatisticsdata";
/**
 * Represents the generated column-level statistics for a table or partition.
**/
export declare class ColumnStatistics extends SpeakeasyBase {
    analyzedTime: Date;
    columnName: string;
    columnType: string;
    statisticsData: ColumnStatisticsData;
}
