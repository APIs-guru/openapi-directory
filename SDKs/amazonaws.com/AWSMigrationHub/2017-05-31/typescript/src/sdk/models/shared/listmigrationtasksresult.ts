import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MigrationTaskSummary } from "./migrationtasksummary";



export class ListMigrationTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MigrationTaskSummaryList", elemType: MigrationTaskSummary })
  migrationTaskSummaryList?: MigrationTaskSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
