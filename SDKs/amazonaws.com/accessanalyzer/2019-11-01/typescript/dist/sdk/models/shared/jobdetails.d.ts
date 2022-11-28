import { SpeakeasyBase } from "../../../internal/utils";
import { JobError } from "./joberror";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Contains details about the policy generation request.
**/
export declare class JobDetails extends SpeakeasyBase {
    completedOn?: Date;
    jobError?: JobError;
    jobId: string;
    startedOn: Date;
    status: JobStatusEnum;
}
