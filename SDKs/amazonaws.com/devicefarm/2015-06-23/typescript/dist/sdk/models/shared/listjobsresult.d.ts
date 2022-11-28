import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Represents the result of a list jobs request.
**/
export declare class ListJobsResult extends SpeakeasyBase {
    jobs?: Job[];
    nextToken?: string;
}
