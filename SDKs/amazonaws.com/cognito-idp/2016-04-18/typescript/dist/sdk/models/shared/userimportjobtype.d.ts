import { SpeakeasyBase } from "../../../internal/utils";
import { UserImportJobStatusTypeEnum } from "./userimportjobstatustypeenum";
/**
 * The user import job type.
**/
export declare class UserImportJobType extends SpeakeasyBase {
    cloudWatchLogsRoleArn?: string;
    completionDate?: Date;
    completionMessage?: string;
    creationDate?: Date;
    failedUsers?: number;
    importedUsers?: number;
    jobId?: string;
    jobName?: string;
    preSignedUrl?: string;
    skippedUsers?: number;
    startDate?: Date;
    status?: UserImportJobStatusTypeEnum;
    userPoolId?: string;
}
