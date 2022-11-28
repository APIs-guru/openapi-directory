import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineSummary } from "./pipelinesummary";
/**
 * Represents the output of a <code>ListPipelines</code> action.
**/
export declare class ListPipelinesOutput extends SpeakeasyBase {
    nextToken?: string;
    pipelines?: PipelineSummary[];
}
