import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionExecution } from "./detectmitigationactionexecution";



export class ListDetectMitigationActionsExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionsExecutions", elemType: DetectMitigationActionExecution })
  actionsExecutions?: DetectMitigationActionExecution[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
