import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineIdName } from "./pipelineidname";
/**
 * Contains the output of ListPipelines.
**/
export declare class ListPipelinesOutput extends SpeakeasyBase {
    hasMoreResults?: boolean;
    marker?: string;
    pipelineIdList: PipelineIdName[];
}
