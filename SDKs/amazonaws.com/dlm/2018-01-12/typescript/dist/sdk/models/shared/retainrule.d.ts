import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.
**/
export declare class RetainRule extends SpeakeasyBase {
    count?: number;
    interval?: number;
    intervalUnit?: RetentionIntervalUnitValuesEnum;
}
