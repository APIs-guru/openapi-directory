import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectMitigationActionsTaskSummary } from "./detectmitigationactionstasksummary";


export class ListDetectMitigationActionsTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.DetectMitigationActionsTaskSummary })
  tasks?: DetectMitigationActionsTaskSummary[];
}
