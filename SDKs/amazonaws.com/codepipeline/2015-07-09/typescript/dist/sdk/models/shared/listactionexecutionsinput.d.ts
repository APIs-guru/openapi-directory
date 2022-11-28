import { SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionFilter } from "./actionexecutionfilter";
export declare class ListActionExecutionsInput extends SpeakeasyBase {
    filter?: ActionExecutionFilter;
    maxResults?: number;
    nextToken?: string;
    pipelineName: string;
}
