import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowRun } from "./workflowrun";



export class GetWorkflowRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Run" })
  run?: WorkflowRun;
}
