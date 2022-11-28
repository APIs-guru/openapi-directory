import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImportMigrationTaskRequest extends SpeakeasyBase {
    dryRun?: boolean;
    migrationTaskName: string;
    progressUpdateStream: string;
}
