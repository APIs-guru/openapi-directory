import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
export declare class BatchGetJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    jobsNotFound?: string[];
}
