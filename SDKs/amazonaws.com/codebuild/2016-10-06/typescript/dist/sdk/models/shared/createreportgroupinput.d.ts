import { SpeakeasyBase } from "../../../internal/utils";
import { ReportExportConfig } from "./reportexportconfig";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";
export declare class CreateReportGroupInput extends SpeakeasyBase {
    exportConfig: ReportExportConfig;
    name: string;
    tags?: Tag[];
    type: ReportTypeEnum;
}
