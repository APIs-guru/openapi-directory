import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportableAutoScalingGroupFieldEnum } from "./exportableautoscalinggroupfieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { Filter } from "./filter";
import { RecommendationPreferences } from "./recommendationpreferences";
import { S3DestinationConfig } from "./s3destinationconfig";



export class ExportAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=fieldsToExport" })
  fieldsToExport?: ExportableAutoScalingGroupFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=fileFormat" })
  fileFormat?: FileFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=includeMemberAccounts" })
  includeMemberAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=recommendationPreferences" })
  recommendationPreferences?: RecommendationPreferences;

  @SpeakeasyMetadata({ data: "json, name=s3DestinationConfig" })
  s3DestinationConfig: S3DestinationConfig;
}
