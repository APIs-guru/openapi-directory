import { SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
import { Warning } from "./warning";
/**
 * When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
export declare class UpdatePipelineResponse extends SpeakeasyBase {
    pipeline?: Pipeline;
    warnings?: Warning[];
}
