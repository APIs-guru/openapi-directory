import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatistics } from "./columnstatistics";
export declare class UpdateColumnStatisticsForPartitionRequest extends SpeakeasyBase {
    catalogId?: string;
    columnStatisticsList: ColumnStatistics[];
    databaseName: string;
    partitionValues: string[];
    tableName: string;
}
