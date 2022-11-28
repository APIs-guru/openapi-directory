import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
import { JobStatusEnum } from "./jobstatusenum";
/**
 *  Describes the summary for an execution job for an Amplify app.
**/
export declare class JobSummary extends SpeakeasyBase {
    commitId: string;
    commitMessage: string;
    commitTime: Date;
    endTime?: Date;
    jobArn: string;
    jobId: string;
    jobType: JobTypeEnum;
    startTime: Date;
    status: JobStatusEnum;
}
