import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeMigrationTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
