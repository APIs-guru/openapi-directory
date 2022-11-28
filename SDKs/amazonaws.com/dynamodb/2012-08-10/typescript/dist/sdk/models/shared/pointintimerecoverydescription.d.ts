import { SpeakeasyBase } from "../../../internal/utils";
import { PointInTimeRecoveryStatusEnum } from "./pointintimerecoverystatusenum";
/**
 * The description of the point in time settings applied to the table.
**/
export declare class PointInTimeRecoveryDescription extends SpeakeasyBase {
    earliestRestorableDateTime?: Date;
    latestRestorableDateTime?: Date;
    pointInTimeRecoveryStatus?: PointInTimeRecoveryStatusEnum;
}
