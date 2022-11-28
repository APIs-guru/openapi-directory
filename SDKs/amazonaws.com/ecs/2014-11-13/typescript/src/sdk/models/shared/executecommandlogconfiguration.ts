import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecuteCommandLogConfiguration
/** 
 * The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.
**/
export class ExecuteCommandLogConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudWatchEncryptionEnabled" })
  cloudWatchEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloudWatchLogGroupName" })
  cloudWatchLogGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=s3EncryptionEnabled" })
  s3EncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=s3KeyPrefix" })
  s3KeyPrefix?: string;
}
