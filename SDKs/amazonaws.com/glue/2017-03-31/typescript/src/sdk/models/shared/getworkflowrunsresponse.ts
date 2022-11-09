import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkflowRun } from "./workflowrun";


export class GetWorkflowRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Runs", elemType: shared.WorkflowRun })
  runs?: WorkflowRun[];
}
