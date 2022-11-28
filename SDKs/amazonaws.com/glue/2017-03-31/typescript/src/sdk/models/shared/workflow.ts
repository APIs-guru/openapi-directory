import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlueprintDetails } from "./blueprintdetails";
import { WorkflowGraph } from "./workflowgraph";
import { WorkflowRun } from "./workflowrun";



// Workflow
/** 
 * A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers.
**/
export class Workflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintDetails" })
  blueprintDetails?: BlueprintDetails;

  @SpeakeasyMetadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultRunProperties" })
  defaultRunProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Graph" })
  graph?: WorkflowGraph;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedOn" })
  lastModifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastRun" })
  lastRun?: WorkflowRun;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrentRuns" })
  maxConcurrentRuns?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
