import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkflowGraph } from "./workflowgraph";
import { StartingEventBatchCondition } from "./startingeventbatchcondition";
import { WorkflowRunStatistics } from "./workflowrunstatistics";
import { WorkflowRunStatusEnum } from "./workflowrunstatusenum";


// WorkflowRun
/** 
 * A workflow run is an execution of a workflow providing all the runtime information.
**/
export class WorkflowRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompletedOn" })
  completedOn?: Date;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=Graph" })
  graph?: WorkflowGraph;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PreviousRunId" })
  previousRunId?: string;

  @Metadata({ data: "json, name=StartedOn" })
  startedOn?: Date;

  @Metadata({ data: "json, name=StartingEventBatchCondition" })
  startingEventBatchCondition?: StartingEventBatchCondition;

  @Metadata({ data: "json, name=Statistics" })
  statistics?: WorkflowRunStatistics;

  @Metadata({ data: "json, name=Status" })
  status?: WorkflowRunStatusEnum;

  @Metadata({ data: "json, name=WorkflowRunId" })
  workflowRunId?: string;

  @Metadata({ data: "json, name=WorkflowRunProperties" })
  workflowRunProperties?: Map<string, string>;
}
