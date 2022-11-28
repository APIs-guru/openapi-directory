import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationTask } from "./migrationtask";



export class DescribeMigrationTaskResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MigrationTask" })
  migrationTask?: MigrationTask;
}
