import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 *  The <code>ListJobsByStatusResponse</code> structure.
**/
export declare class ListJobsByStatusResponse extends SpeakeasyBase {
    jobs?: Job[];
    nextPageToken?: string;
}
