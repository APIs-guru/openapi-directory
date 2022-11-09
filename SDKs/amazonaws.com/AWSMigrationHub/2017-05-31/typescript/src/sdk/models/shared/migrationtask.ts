import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceAttribute } from "./resourceattribute";
import { Task } from "./task";


// MigrationTask
/** 
 * Represents a migration task in a migration tool.
**/
export class MigrationTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName?: string;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream?: string;

  @Metadata({ data: "json, name=ResourceAttributeList", elemType: shared.ResourceAttribute })
  resourceAttributeList?: ResourceAttribute[];

  @Metadata({ data: "json, name=Task" })
  task?: Task;

  @Metadata({ data: "json, name=UpdateDateTime" })
  updateDateTime?: Date;
}
