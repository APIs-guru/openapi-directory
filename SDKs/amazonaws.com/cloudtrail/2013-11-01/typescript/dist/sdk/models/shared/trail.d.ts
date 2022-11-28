import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The settings for a trail.
**/
export declare class Trail extends SpeakeasyBase {
    cloudWatchLogsLogGroupArn?: string;
    cloudWatchLogsRoleArn?: string;
    hasCustomEventSelectors?: boolean;
    hasInsightSelectors?: boolean;
    homeRegion?: string;
    includeGlobalServiceEvents?: boolean;
    isMultiRegionTrail?: boolean;
    isOrganizationTrail?: boolean;
    kmsKeyId?: string;
    logFileValidationEnabled?: boolean;
    name?: string;
    s3BucketName?: string;
    s3KeyPrefix?: string;
    snsTopicArn?: string;
    snsTopicName?: string;
    trailArn?: string;
}
