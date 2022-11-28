import { SpeakeasyBase } from "../../../internal/utils";
import { ReportGroupTrendFieldTypeEnum } from "./reportgrouptrendfieldtypeenum";
export declare class GetReportGroupTrendInput extends SpeakeasyBase {
    numOfReports?: number;
    reportGroupArn: string;
    trendField: ReportGroupTrendFieldTypeEnum;
}
