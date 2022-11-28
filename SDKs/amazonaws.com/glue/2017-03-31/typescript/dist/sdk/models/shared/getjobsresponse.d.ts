import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
export declare class GetJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    nextToken?: string;
}
