import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateTrailResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class UpdateTrailResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogsLogGroupArn" })
  cloudWatchLogsLogGroupArn?: string;

  @Metadata({ data: "json, name=CloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @Metadata({ data: "json, name=IncludeGlobalServiceEvents" })
  includeGlobalServiceEvents?: boolean;

  @Metadata({ data: "json, name=IsMultiRegionTrail" })
  isMultiRegionTrail?: boolean;

  @Metadata({ data: "json, name=IsOrganizationTrail" })
  isOrganizationTrail?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LogFileValidationEnabled" })
  logFileValidationEnabled?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;

  @Metadata({ data: "json, name=SnsTopicARN" })
  snsTopicArn?: string;

  @Metadata({ data: "json, name=SnsTopicName" })
  snsTopicName?: string;

  @Metadata({ data: "json, name=TrailARN" })
  trailArn?: string;
}
