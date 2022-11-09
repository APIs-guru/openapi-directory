import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Task } from "./task";


export class NotifyMigrationTaskStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName: string;

  @Metadata({ data: "json, name=NextUpdateSeconds" })
  nextUpdateSeconds: number;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream: string;

  @Metadata({ data: "json, name=Task" })
  task: Task;

  @Metadata({ data: "json, name=UpdateDateTime" })
  updateDateTime: Date;
}
