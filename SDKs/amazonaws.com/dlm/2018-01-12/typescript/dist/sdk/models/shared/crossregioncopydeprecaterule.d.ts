import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * Specifies an AMI deprecation rule for cross-Region AMI copies created by a cross-Region copy rule.
**/
export declare class CrossRegionCopyDeprecateRule extends SpeakeasyBase {
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
