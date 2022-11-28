import { SpeakeasyBase } from "../../../internal/utils";
import { DecimalNumber } from "./decimalnumber";
/**
 * Defines column statistics supported for fixed-point number data columns.
**/
export declare class DecimalColumnStatisticsData extends SpeakeasyBase {
    maximumValue?: DecimalNumber;
    minimumValue?: DecimalNumber;
    numberOfDistinctValues: number;
    numberOfNulls: number;
}
