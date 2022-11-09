import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportableAutoScalingGroupFieldEnum } from "./exportableautoscalinggroupfieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";
import { S3DestinationConfig } from "./s3destinationconfig";


export class ExportAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=fieldsToExport" })
  fieldsToExport?: ExportableAutoScalingGroupFieldEnum[];

  @Metadata({ data: "json, name=fileFormat" })
  fileFormat?: FileFormatEnum;

  @Metadata({ data: "json, name=filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=includeMemberAccounts" })
  includeMemberAccounts?: boolean;

  @Metadata({ data: "json, name=recommendationPreferences" })
  recommendationPreferences?: RecommendationPreferences;

  @Metadata({ data: "json, name=s3DestinationConfig" })
  s3DestinationConfig: S3DestinationConfig;
}
