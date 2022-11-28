import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineActivity } from "./pipelineactivity";
import { ReprocessingSummary } from "./reprocessingsummary";
/**
 * Contains information about a pipeline.
**/
export declare class Pipeline extends SpeakeasyBase {
    activities?: PipelineActivity[];
    arn?: string;
    creationTime?: Date;
    lastUpdateTime?: Date;
    name?: string;
    reprocessingSummaries?: ReprocessingSummary[];
}
