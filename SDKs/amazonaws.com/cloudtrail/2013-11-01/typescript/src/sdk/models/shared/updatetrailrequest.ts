import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateTrailRequest
/** 
 * Specifies settings to update for the trail.
**/
export class UpdateTrailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsLogGroupArn" })
  cloudWatchLogsLogGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableLogFileValidation" })
  enableLogFileValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeGlobalServiceEvents" })
  includeGlobalServiceEvents?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsMultiRegionTrail" })
  isMultiRegionTrail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsOrganizationTrail" })
  isOrganizationTrail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicName" })
  snsTopicName?: string;
}
