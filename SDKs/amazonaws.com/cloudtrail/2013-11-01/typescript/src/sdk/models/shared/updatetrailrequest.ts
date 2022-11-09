import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateTrailRequest
/** 
 * Specifies settings to update for the trail.
**/
export class UpdateTrailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogsLogGroupArn" })
  cloudWatchLogsLogGroupArn?: string;

  @Metadata({ data: "json, name=CloudWatchLogsRoleArn" })
  cloudWatchLogsRoleArn?: string;

  @Metadata({ data: "json, name=EnableLogFileValidation" })
  enableLogFileValidation?: boolean;

  @Metadata({ data: "json, name=IncludeGlobalServiceEvents" })
  includeGlobalServiceEvents?: boolean;

  @Metadata({ data: "json, name=IsMultiRegionTrail" })
  isMultiRegionTrail?: boolean;

  @Metadata({ data: "json, name=IsOrganizationTrail" })
  isOrganizationTrail?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=S3KeyPrefix" })
  s3KeyPrefix?: string;

  @Metadata({ data: "json, name=SnsTopicName" })
  snsTopicName?: string;
}
