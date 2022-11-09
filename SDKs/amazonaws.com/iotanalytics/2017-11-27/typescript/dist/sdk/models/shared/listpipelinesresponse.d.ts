import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineSummary } from "./pipelinesummary";
export declare class ListPipelinesResponse extends SpeakeasyBase {
    nextToken?: string;
    pipelineSummaries?: PipelineSummary[];
}
