import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Represents the output of a <code>PollForJobs</code> action.
**/
export declare class PollForJobsOutput extends SpeakeasyBase {
    jobs?: Job[];
}
