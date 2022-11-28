import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of a <code>DescribeLimits</code> operation.
**/
export declare class DescribeLimitsOutput extends SpeakeasyBase {
    accountMaxReadCapacityUnits?: number;
    accountMaxWriteCapacityUnits?: number;
    tableMaxReadCapacityUnits?: number;
    tableMaxWriteCapacityUnits?: number;
}
