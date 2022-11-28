import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceAttribute } from "./resourceattribute";
import { Task } from "./task";



// MigrationTask
/** 
 * Represents a migration task in a migration tool.
**/
export class MigrationTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceAttributeList", elemType: ResourceAttribute })
  resourceAttributeList?: ResourceAttribute[];

  @SpeakeasyMetadata({ data: "json, name=Task" })
  task?: Task;

  @SpeakeasyMetadata({ data: "json, name=UpdateDateTime" })
  updateDateTime?: Date;
}
