import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A map of key-value pairs for all supported statistics. Currently, only count is supported.
**/
export declare class Statistics extends SpeakeasyBase {
    average?: number;
    count?: number;
    maximum?: number;
    minimum?: number;
    stdDeviation?: number;
    sum?: number;
    sumOfSquares?: number;
    variance?: number;
}
