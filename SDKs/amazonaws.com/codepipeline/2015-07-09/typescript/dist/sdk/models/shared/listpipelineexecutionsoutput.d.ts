import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineExecutionSummary } from "./pipelineexecutionsummary";
/**
 * Represents the output of a <code>ListPipelineExecutions</code> action.
**/
export declare class ListPipelineExecutionsOutput extends SpeakeasyBase {
    nextToken?: string;
    pipelineExecutionSummaries?: PipelineExecutionSummary[];
}
