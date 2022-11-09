import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportPackagingTypeEnum } from "./reportpackagingtypeenum";


// S3ReportExportConfig
/** 
 *  Information about the S3 bucket where the raw data of a report are exported. 
**/
export class S3ReportExportConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=bucketOwner" })
  bucketOwner?: string;

  @Metadata({ data: "json, name=encryptionDisabled" })
  encryptionDisabled?: boolean;

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=packaging" })
  packaging?: ReportPackagingTypeEnum;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
