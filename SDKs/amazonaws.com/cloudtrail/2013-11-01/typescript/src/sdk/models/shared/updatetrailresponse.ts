import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateTrailResponse
/** 
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
export class UpdateTrailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsLogGroupArn" })
  cloudWatchLogsLogGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IncludeGlobalServiceEvents" })
  includeGlobalServiceEvents?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsMultiRegionTrail" })
  isMultiRegionTrail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsOrganizationTrail" })
  isOrganizationTrail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogFileValidationEnabled" })
  logFileValidationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicARN" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicName" })
  snsTopicName?: string;

  @SpeakeasyMetadata({ data: "json, name=TrailARN" })
  trailArn?: string;
}
