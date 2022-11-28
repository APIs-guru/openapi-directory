import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines column statistics supported for integer data columns.
**/
export declare class LongColumnStatisticsData extends SpeakeasyBase {
    maximumValue?: number;
    minimumValue?: number;
    numberOfDistinctValues: number;
    numberOfNulls: number;
}
