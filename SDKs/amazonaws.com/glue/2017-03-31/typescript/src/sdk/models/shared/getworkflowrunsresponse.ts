import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowRun } from "./workflowrun";



export class GetWorkflowRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Runs", elemType: WorkflowRun })
  runs?: WorkflowRun[];
}
