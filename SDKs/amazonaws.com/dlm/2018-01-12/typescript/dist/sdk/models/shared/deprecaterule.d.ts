import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * Specifies an AMI deprecation rule for a schedule.
**/
export declare class DeprecateRule extends SpeakeasyBase {
    count?: number;
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
