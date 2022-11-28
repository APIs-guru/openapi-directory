import { SpeakeasyBase } from "../../../internal/utils";
import { ReportPackagingTypeEnum } from "./reportpackagingtypeenum";
/**
 *  Information about the S3 bucket where the raw data of a report are exported.
**/
export declare class S3ReportExportConfig extends SpeakeasyBase {
    bucket?: string;
    bucketOwner?: string;
    encryptionDisabled?: boolean;
    encryptionKey?: string;
    packaging?: ReportPackagingTypeEnum;
    path?: string;
}
