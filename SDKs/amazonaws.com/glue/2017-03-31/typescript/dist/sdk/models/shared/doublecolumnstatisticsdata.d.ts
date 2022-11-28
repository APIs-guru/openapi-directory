import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines column statistics supported for floating-point number data columns.
**/
export declare class DoubleColumnStatisticsData extends SpeakeasyBase {
    maximumValue?: number;
    minimumValue?: number;
    numberOfDistinctValues: number;
    numberOfNulls: number;
}
