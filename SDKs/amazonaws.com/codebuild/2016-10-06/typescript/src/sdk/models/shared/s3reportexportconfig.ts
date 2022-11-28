import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportPackagingTypeEnum } from "./reportpackagingtypeenum";



// S3ReportExportConfig
/** 
 *  Information about the S3 bucket where the raw data of a report are exported. 
**/
export class S3ReportExportConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketOwner" })
  bucketOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=encryptionDisabled" })
  encryptionDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=packaging" })
  packaging?: ReportPackagingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
