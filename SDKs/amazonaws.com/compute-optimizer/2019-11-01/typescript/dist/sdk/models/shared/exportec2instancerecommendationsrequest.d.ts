import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportableInstanceFieldEnum } from "./exportableinstancefieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";
import { S3DestinationConfig } from "./s3destinationconfig";
export declare class ExportEc2InstanceRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    fieldsToExport?: ExportableInstanceFieldEnum[];
    fileFormat?: FileFormatEnum;
    filters?: Filter[];
    includeMemberAccounts?: boolean;
    recommendationPreferences?: RecommendationPreferences;
    s3DestinationConfig: S3DestinationConfig;
}
