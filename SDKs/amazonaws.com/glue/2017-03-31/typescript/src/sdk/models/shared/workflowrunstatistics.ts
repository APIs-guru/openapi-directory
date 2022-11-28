import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkflowRunStatistics
/** 
 * Workflow run statistics provides statistics about the workflow run.
**/
export class WorkflowRunStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedActions" })
  failedActions?: number;

  @SpeakeasyMetadata({ data: "json, name=RunningActions" })
  runningActions?: number;

  @SpeakeasyMetadata({ data: "json, name=StoppedActions" })
  stoppedActions?: number;

  @SpeakeasyMetadata({ data: "json, name=SucceededActions" })
  succeededActions?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeoutActions" })
  timeoutActions?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalActions" })
  totalActions?: number;
}
