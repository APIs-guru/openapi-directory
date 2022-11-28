import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatistics } from "./columnstatistics";
import { ColumnError } from "./columnerror";
export declare class GetColumnStatisticsForPartitionResponse extends SpeakeasyBase {
    columnStatisticsList?: ColumnStatistics[];
    errors?: ColumnError[];
}
