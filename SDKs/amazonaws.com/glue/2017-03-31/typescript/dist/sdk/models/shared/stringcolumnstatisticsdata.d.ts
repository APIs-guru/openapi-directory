import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines column statistics supported for character sequence data values.
**/
export declare class StringColumnStatisticsData extends SpeakeasyBase {
    averageLength: number;
    maximumLength: number;
    numberOfDistinctValues: number;
    numberOfNulls: number;
}
