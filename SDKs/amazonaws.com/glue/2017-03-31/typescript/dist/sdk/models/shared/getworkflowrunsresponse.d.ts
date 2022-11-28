import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowRun } from "./workflowrun";
export declare class GetWorkflowRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    runs?: WorkflowRun[];
}
