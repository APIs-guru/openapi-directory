import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceAttribute } from "./resourceattribute";
import { Task } from "./task";
/**
 * Represents a migration task in a migration tool.
**/
export declare class MigrationTask extends SpeakeasyBase {
    migrationTaskName?: string;
    progressUpdateStream?: string;
    resourceAttributeList?: ResourceAttribute[];
    task?: Task;
    updateDateTime?: Date;
}
