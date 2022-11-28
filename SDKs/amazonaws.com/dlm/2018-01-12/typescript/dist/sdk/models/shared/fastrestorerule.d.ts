import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.
**/
export declare class FastRestoreRule extends SpeakeasyBase {
    availabilityZones: string[];
    count?: number;
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
