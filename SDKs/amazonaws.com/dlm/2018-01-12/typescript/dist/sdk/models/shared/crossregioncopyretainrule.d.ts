import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * Specifies the retention rule for cross-Region snapshot copies.
**/
export declare class CrossRegionCopyRetainRule extends SpeakeasyBase {
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
