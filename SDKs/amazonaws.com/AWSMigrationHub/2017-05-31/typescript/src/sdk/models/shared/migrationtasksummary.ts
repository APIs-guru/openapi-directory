import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusEnum } from "./statusenum";


// MigrationTaskSummary
/** 
 * MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.
**/
export class MigrationTaskSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName?: string;

  @Metadata({ data: "json, name=ProgressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusEnum;

  @Metadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;

  @Metadata({ data: "json, name=UpdateDateTime" })
  updateDateTime?: Date;
}
