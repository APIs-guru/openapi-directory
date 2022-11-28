import { SpeakeasyBase } from "../../../internal/utils";
import { ExportableAutoScalingGroupFieldEnum } from "./exportableautoscalinggroupfieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";
import { S3DestinationConfig } from "./s3destinationconfig";
export declare class ExportAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    fieldsToExport?: ExportableAutoScalingGroupFieldEnum[];
    fileFormat?: FileFormatEnum;
    filters?: Filter[];
    includeMemberAccounts?: boolean;
    recommendationPreferences?: RecommendationPreferences;
    s3DestinationConfig: S3DestinationConfig;
}
