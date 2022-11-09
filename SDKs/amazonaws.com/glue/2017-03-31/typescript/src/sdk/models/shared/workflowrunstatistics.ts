import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkflowRunStatistics
/** 
 * Workflow run statistics provides statistics about the workflow run.
**/
export class WorkflowRunStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedActions" })
  failedActions?: number;

  @Metadata({ data: "json, name=RunningActions" })
  runningActions?: number;

  @Metadata({ data: "json, name=StoppedActions" })
  stoppedActions?: number;

  @Metadata({ data: "json, name=SucceededActions" })
  succeededActions?: number;

  @Metadata({ data: "json, name=TimeoutActions" })
  timeoutActions?: number;

  @Metadata({ data: "json, name=TotalActions" })
  totalActions?: number;
}
