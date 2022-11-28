import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Workflow run statistics provides statistics about the workflow run.
**/
export declare class WorkflowRunStatistics extends SpeakeasyBase {
    failedActions?: number;
    runningActions?: number;
    stoppedActions?: number;
    succeededActions?: number;
    timeoutActions?: number;
    totalActions?: number;
}
