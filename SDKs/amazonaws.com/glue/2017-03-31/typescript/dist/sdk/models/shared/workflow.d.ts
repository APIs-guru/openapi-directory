import { SpeakeasyBase } from "../../../internal/utils";
import { BlueprintDetails } from "./blueprintdetails";
import { WorkflowGraph } from "./workflowgraph";
import { WorkflowRun } from "./workflowrun";
/**
 * A workflow is a collection of multiple dependent Glue jobs and crawlers that are run to complete a complex ETL task. A workflow manages the execution and monitoring of all its jobs and crawlers.
**/
export declare class Workflow extends SpeakeasyBase {
    blueprintDetails?: BlueprintDetails;
    createdOn?: Date;
    defaultRunProperties?: Map<string, string>;
    description?: string;
    graph?: WorkflowGraph;
    lastModifiedOn?: Date;
    lastRun?: WorkflowRun;
    maxConcurrentRuns?: number;
    name?: string;
}
