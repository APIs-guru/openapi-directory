import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousBackupsStatusEnum } from "./continuousbackupsstatusenum";
import { PointInTimeRecoveryDescription } from "./pointintimerecoverydescription";
/**
 * Represents the continuous backups and point in time recovery settings on the table.
**/
export declare class ContinuousBackupsDescription extends SpeakeasyBase {
    continuousBackupsStatus: ContinuousBackupsStatusEnum;
    pointInTimeRecoveryDescription?: PointInTimeRecoveryDescription;
}
