import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatistics } from "./columnstatistics";
import { ColumnError } from "./columnerror";
export declare class GetColumnStatisticsForTableResponse extends SpeakeasyBase {
    columnStatisticsList?: ColumnStatistics[];
    errors?: ColumnError[];
}
