import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnStatistics } from "./columnstatistics";
import { ErrorDetail } from "./errordetail";
/**
 * Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.
**/
export declare class ColumnStatisticsError extends SpeakeasyBase {
    columnStatistics?: ColumnStatistics;
    error?: ErrorDetail;
}
