import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkflowGraph } from "./workflowgraph";
import { StartingEventBatchCondition } from "./startingeventbatchcondition";
import { WorkflowRunStatistics } from "./workflowrunstatistics";
import { WorkflowRunStatusEnum } from "./workflowrunstatusenum";



// WorkflowRun
/** 
 * A workflow run is an execution of a workflow providing all the runtime information.
**/
export class WorkflowRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Graph" })
  graph?: WorkflowGraph;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousRunId" })
  previousRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartingEventBatchCondition" })
  startingEventBatchCondition?: StartingEventBatchCondition;

  @SpeakeasyMetadata({ data: "json, name=Statistics" })
  statistics?: WorkflowRunStatistics;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: WorkflowRunStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=WorkflowRunId" })
  workflowRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkflowRunProperties" })
  workflowRunProperties?: Map<string, string>;
}
