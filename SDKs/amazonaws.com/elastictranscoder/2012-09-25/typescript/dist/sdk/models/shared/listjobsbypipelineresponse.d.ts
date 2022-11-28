import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * The <code>ListJobsByPipelineResponse</code> structure.
**/
export declare class ListJobsByPipelineResponse extends SpeakeasyBase {
    jobs?: Job[];
    nextPageToken?: string;
}
