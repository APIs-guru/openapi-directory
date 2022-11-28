import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";



export class NotifyMigrationTaskStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @SpeakeasyMetadata({ data: "json, name=NextUpdateSeconds" })
  nextUpdateSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;

  @SpeakeasyMetadata({ data: "json, name=Task" })
  task: Task;

  @SpeakeasyMetadata({ data: "json, name=UpdateDateTime" })
  updateDateTime: Date;
}
