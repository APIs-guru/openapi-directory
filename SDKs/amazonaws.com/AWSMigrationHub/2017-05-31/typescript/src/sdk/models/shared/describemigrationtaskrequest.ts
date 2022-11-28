import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeMigrationTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;
}
