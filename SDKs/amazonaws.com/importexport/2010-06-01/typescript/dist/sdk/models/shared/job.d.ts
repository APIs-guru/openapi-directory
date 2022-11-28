import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
/**
 * Representation of a job returned by the ListJobs operation.
**/
export declare class Job extends SpeakeasyBase {
    creationDate?: Date;
    isCanceled?: boolean;
    jobId?: string;
    jobType?: JobTypeEnum;
}
