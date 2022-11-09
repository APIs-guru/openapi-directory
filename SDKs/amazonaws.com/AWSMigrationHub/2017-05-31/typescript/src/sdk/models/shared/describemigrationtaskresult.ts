import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MigrationTask } from "./migrationtask";


export class DescribeMigrationTaskResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=MigrationTask" })
  migrationTask?: MigrationTask;
}
