import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>ListPipelineExecutions</code> action.
**/
export declare class ListPipelineExecutionsInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    pipelineName: string;
}
