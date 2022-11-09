import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DetectMitigationActionExecution } from "./detectmitigationactionexecution";


export class ListDetectMitigationActionsExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionsExecutions", elemType: shared.DetectMitigationActionExecution })
  actionsExecutions?: DetectMitigationActionExecution[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
