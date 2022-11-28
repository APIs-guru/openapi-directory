import { SpeakeasyBase } from "../../../internal/utils";
import { ExportableVolumeFieldEnum } from "./exportablevolumefieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { EbsFilter } from "./ebsfilter";
import { S3DestinationConfig } from "./s3destinationconfig";
export declare class ExportEbsVolumeRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    fieldsToExport?: ExportableVolumeFieldEnum[];
    fileFormat?: FileFormatEnum;
    filters?: EbsFilter[];
    includeMemberAccounts?: boolean;
    s3DestinationConfig: S3DestinationConfig;
}
