import { SpeakeasyBase } from "../../../internal/utils";
import { ReprocessingSummary } from "./reprocessingsummary";
/**
 * A summary of information about a pipeline.
**/
export declare class PipelineSummary extends SpeakeasyBase {
    creationTime?: Date;
    lastUpdateTime?: Date;
    pipelineName?: string;
    reprocessingSummaries?: ReprocessingSummary[];
}
