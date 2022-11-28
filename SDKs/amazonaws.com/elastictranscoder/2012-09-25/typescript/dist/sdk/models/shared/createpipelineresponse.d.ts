import { SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
import { Warning } from "./warning";
/**
 * When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
export declare class CreatePipelineResponse extends SpeakeasyBase {
    pipeline?: Pipeline;
    warnings?: Warning[];
}
