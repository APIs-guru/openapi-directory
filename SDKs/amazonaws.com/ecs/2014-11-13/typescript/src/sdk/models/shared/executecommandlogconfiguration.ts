import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecuteCommandLogConfiguration
/** 
 * The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.
**/
export class ExecuteCommandLogConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudWatchEncryptionEnabled" })
  cloudWatchEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=cloudWatchLogGroupName" })
  cloudWatchLogGroupName?: string;

  @Metadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=s3EncryptionEnabled" })
  s3EncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=s3KeyPrefix" })
  s3KeyPrefix?: string;
}
