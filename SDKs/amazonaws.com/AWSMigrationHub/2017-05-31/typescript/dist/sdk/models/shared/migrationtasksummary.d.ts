import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";
/**
 * MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.
**/
export declare class MigrationTaskSummary extends SpeakeasyBase {
    migrationTaskName?: string;
    progressPercent?: number;
    progressUpdateStream?: string;
    status?: StatusEnum;
    statusDetail?: string;
    updateDateTime?: Date;
}
