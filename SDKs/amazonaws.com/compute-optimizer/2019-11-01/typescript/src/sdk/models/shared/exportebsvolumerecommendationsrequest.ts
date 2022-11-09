import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportableVolumeFieldEnum } from "./exportablevolumefieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { EbsFilter } from "./ebsfilter";
import { S3DestinationConfig } from "./s3destinationconfig";


export class ExportEbsVolumeRecommendationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=fieldsToExport" })
  fieldsToExport?: ExportableVolumeFieldEnum[];

  @Metadata({ data: "json, name=fileFormat" })
  fileFormat?: FileFormatEnum;

  @Metadata({ data: "json, name=filters", elemType: shared.EbsFilter })
  filters?: EbsFilter[];

  @Metadata({ data: "json, name=includeMemberAccounts" })
  includeMemberAccounts?: boolean;

  @Metadata({ data: "json, name=s3DestinationConfig" })
  s3DestinationConfig: S3DestinationConfig;
}
