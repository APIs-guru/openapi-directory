import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines column statistics supported for Boolean data columns.
**/
export declare class BooleanColumnStatisticsData extends SpeakeasyBase {
    numberOfFalses: number;
    numberOfNulls: number;
    numberOfTrues: number;
}
