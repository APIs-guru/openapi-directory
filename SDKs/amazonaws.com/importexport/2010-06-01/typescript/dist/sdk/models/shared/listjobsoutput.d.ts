import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Output structure for the ListJobs operation.
**/
export declare class ListJobsOutput extends SpeakeasyBase {
    isTruncated?: boolean;
    jobs?: Job[];
}
