import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportableLambdaFunctionFieldEnum } from "./exportablelambdafunctionfieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { LambdaFunctionRecommendationFilter } from "./lambdafunctionrecommendationfilter";
import { S3DestinationConfig } from "./s3destinationconfig";



export class ExportLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=fieldsToExport" })
  fieldsToExport?: ExportableLambdaFunctionFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=fileFormat" })
  fileFormat?: FileFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: LambdaFunctionRecommendationFilter })
  filters?: LambdaFunctionRecommendationFilter[];

  @SpeakeasyMetadata({ data: "json, name=includeMemberAccounts" })
  includeMemberAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=s3DestinationConfig" })
  s3DestinationConfig: S3DestinationConfig;
}
