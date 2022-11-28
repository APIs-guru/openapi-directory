import { SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
/**
 * When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
export declare class UpdatePipelineStatusResponse extends SpeakeasyBase {
    pipeline?: Pipeline;
}
