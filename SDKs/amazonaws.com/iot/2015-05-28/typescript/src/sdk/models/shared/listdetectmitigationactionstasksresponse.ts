import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionsTaskSummary } from "./detectmitigationactionstasksummary";



export class ListDetectMitigationActionsTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: DetectMitigationActionsTaskSummary })
  tasks?: DetectMitigationActionsTaskSummary[];
}
