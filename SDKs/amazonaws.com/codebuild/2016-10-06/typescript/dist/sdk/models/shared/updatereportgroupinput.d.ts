import { SpeakeasyBase } from "../../../internal/utils";
import { ReportExportConfig } from "./reportexportconfig";
import { Tag } from "./tag";
export declare class UpdateReportGroupInput extends SpeakeasyBase {
    arn: string;
    exportConfig?: ReportExportConfig;
    tags?: Tag[];
}
