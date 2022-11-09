import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlueprintDetails } from "./blueprintdetails";
import { WorkflowGraph } from "./workflowgraph";
import { WorkflowRun } from "./workflowrun";


// Workflow
/** 
 * A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers.
**/
export class Workflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintDetails" })
  blueprintDetails?: BlueprintDetails;

  @Metadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @Metadata({ data: "json, name=DefaultRunProperties" })
  defaultRunProperties?: Map<string, string>;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Graph" })
  graph?: WorkflowGraph;

  @Metadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @Metadata({ data: "json, name=LastRun" })
  lastRun?: WorkflowRun;

  @Metadata({ data: "json, name=MaxConcurrentRuns" })
  maxConcurrentRuns?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
