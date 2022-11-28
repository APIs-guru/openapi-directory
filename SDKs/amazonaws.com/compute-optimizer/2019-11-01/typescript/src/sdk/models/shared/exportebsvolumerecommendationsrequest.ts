import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportableVolumeFieldEnum } from "./exportablevolumefieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { EbsFilter } from "./ebsfilter";
import { S3DestinationConfig } from "./s3destinationconfig";



export class ExportEbsVolumeRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=fieldsToExport" })
  fieldsToExport?: ExportableVolumeFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=fileFormat" })
  fileFormat?: FileFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: EbsFilter })
  filters?: EbsFilter[];

  @SpeakeasyMetadata({ data: "json, name=includeMemberAccounts" })
  includeMemberAccounts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=s3DestinationConfig" })
  s3DestinationConfig: S3DestinationConfig;
}
