import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MigrationTaskSummary } from "./migrationtasksummary";
export declare class ListMigrationTasksResult extends SpeakeasyBase {
    migrationTaskSummaryList?: MigrationTaskSummary[];
    nextToken?: string;
}
