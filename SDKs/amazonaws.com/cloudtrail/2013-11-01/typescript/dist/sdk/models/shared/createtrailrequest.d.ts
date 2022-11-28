import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Specifies the settings for each trail.
**/
export declare class CreateTrailRequest extends SpeakeasyBase {
    cloudWatchLogsLogGroupArn?: string;
    cloudWatchLogsRoleArn?: string;
    enableLogFileValidation?: boolean;
    includeGlobalServiceEvents?: boolean;
    isMultiRegionTrail?: boolean;
    isOrganizationTrail?: boolean;
    kmsKeyId?: string;
    name: string;
    s3BucketName: string;
    s3KeyPrefix?: string;
    snsTopicName?: string;
    tagsList?: Tag[];
}
