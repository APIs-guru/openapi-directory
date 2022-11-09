import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specifies settings to update for the trail.
**/
export declare class UpdateTrailRequest extends SpeakeasyBase {
    cloudWatchLogsLogGroupArn?: string;
    cloudWatchLogsRoleArn?: string;
    enableLogFileValidation?: boolean;
    includeGlobalServiceEvents?: boolean;
    isMultiRegionTrail?: boolean;
    isOrganizationTrail?: boolean;
    kmsKeyId?: string;
    name: string;
    s3BucketName?: string;
    s3KeyPrefix?: string;
    snsTopicName?: string;
}
