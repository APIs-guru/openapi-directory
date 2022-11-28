import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.
**/
export declare class ExecuteCommandLogConfiguration extends SpeakeasyBase {
    cloudWatchEncryptionEnabled?: boolean;
    cloudWatchLogGroupName?: string;
    s3BucketName?: string;
    s3EncryptionEnabled?: boolean;
    s3KeyPrefix?: string;
}
