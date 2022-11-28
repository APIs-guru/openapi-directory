import { SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
import { Warning } from "./warning";
/**
 * The <code>ReadPipelineResponse</code> structure.
**/
export declare class ReadPipelineResponse extends SpeakeasyBase {
    pipeline?: Pipeline;
    warnings?: Warning[];
}
