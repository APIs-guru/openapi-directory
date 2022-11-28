import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatistics } from "./columnstatistics";
export declare class UpdateColumnStatisticsForTableRequest extends SpeakeasyBase {
    catalogId?: string;
    columnStatisticsList: ColumnStatistics[];
    databaseName: string;
    tableName: string;
}
