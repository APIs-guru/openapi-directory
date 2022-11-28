import { SpeakeasyBase } from "../../../internal/utils";
import { ExportableLambdaFunctionFieldEnum } from "./exportablelambdafunctionfieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { LambdaFunctionRecommendationFilter } from "./lambdafunctionrecommendationfilter";
import { S3DestinationConfig } from "./s3destinationconfig";
export declare class ExportLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    fieldsToExport?: ExportableLambdaFunctionFieldEnum[];
    fileFormat?: FileFormatEnum;
    filters?: LambdaFunctionRecommendationFilter[];
    includeMemberAccounts?: boolean;
    s3DestinationConfig: S3DestinationConfig;
}
