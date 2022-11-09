import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MigrationTaskSummary } from "./migrationtasksummary";


export class ListMigrationTasksResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=MigrationTaskSummaryList", elemType: shared.MigrationTaskSummary })
  migrationTaskSummaryList?: MigrationTaskSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
