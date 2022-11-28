import { SpeakeasyBase } from "../../../internal/utils";
import { ReportExportConfigTypeEnum } from "./reportexportconfigtypeenum";
import { S3ReportExportConfig } from "./s3reportexportconfig";
/**
 *  Information about the location where the run of a report is exported.
**/
export declare class ReportExportConfig extends SpeakeasyBase {
    exportConfigType?: ReportExportConfigTypeEnum;
    s3Destination?: S3ReportExportConfig;
}
