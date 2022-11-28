import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportExportConfigTypeEnum } from "./reportexportconfigtypeenum";
import { S3ReportExportConfig } from "./s3reportexportconfig";



// ReportExportConfig
/** 
 *  Information about the location where the run of a report is exported. 
**/
export class ReportExportConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportConfigType" })
  exportConfigType?: ReportExportConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=s3Destination" })
  s3Destination?: S3ReportExportConfig;
}
