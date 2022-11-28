import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";



// MigrationTaskSummary
/** 
 * MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.
**/
export class MigrationTaskSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MigrationTaskName" })
  migrationTaskName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressPercent" })
  progressPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStream" })
  progressUpdateStream?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetail" })
  statusDetail?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateDateTime" })
  updateDateTime?: Date;
}
