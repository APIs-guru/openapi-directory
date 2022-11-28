import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines column statistics supported for timestamp data columns.
**/
export declare class DateColumnStatisticsData extends SpeakeasyBase {
    maximumValue?: Date;
    minimumValue?: Date;
    numberOfDistinctValues: number;
    numberOfNulls: number;
}
