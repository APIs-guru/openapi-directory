import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowRun } from "./workflowrun";


export class GetWorkflowRunResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Run" })
  run?: WorkflowRun;
}
