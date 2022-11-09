import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportableLambdaFunctionFieldEnum } from "./exportablelambdafunctionfieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { LambdaFunctionRecommendationFilter } from "./lambdafunctionrecommendationfilter";
import { S3DestinationConfig } from "./s3destinationconfig";


export class ExportLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=fieldsToExport" })
  fieldsToExport?: ExportableLambdaFunctionFieldEnum[];

  @Metadata({ data: "json, name=fileFormat" })
  fileFormat?: FileFormatEnum;

  @Metadata({ data: "json, name=filters", elemType: shared.LambdaFunctionRecommendationFilter })
  filters?: LambdaFunctionRecommendationFilter[];

  @Metadata({ data: "json, name=includeMemberAccounts" })
  includeMemberAccounts?: boolean;

  @Metadata({ data: "json, name=s3DestinationConfig" })
  s3DestinationConfig: S3DestinationConfig;
}
