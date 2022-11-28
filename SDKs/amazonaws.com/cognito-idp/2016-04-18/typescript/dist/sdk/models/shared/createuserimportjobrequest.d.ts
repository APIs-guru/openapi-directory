import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to create the user import job.
**/
export declare class CreateUserImportJobRequest extends SpeakeasyBase {
    cloudWatchLogsRoleArn: string;
    jobName: string;
    userPoolId: string;
}
