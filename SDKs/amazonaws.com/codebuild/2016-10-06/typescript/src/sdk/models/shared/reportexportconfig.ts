import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportExportConfigTypeEnum } from "./reportexportconfigtypeenum";
import { S3ReportExportConfig } from "./s3reportexportconfig";


// ReportExportConfig
/** 
 *  Information about the location where the run of a report is exported. 
**/
export class ReportExportConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportConfigType" })
  exportConfigType?: ReportExportConfigTypeEnum;

  @Metadata({ data: "json, name=s3Destination" })
  s3Destination?: S3ReportExportConfig;
}
