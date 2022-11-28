import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
export declare class NotifyMigrationTaskStateRequest extends SpeakeasyBase {
    dryRun?: boolean;
    migrationTaskName: string;
    nextUpdateSeconds: number;
    progressUpdateStream: string;
    task: Task;
    updateDateTime: Date;
}
