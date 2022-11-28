import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFilter } from "./reportfilter";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListReportsForReportGroupInput extends SpeakeasyBase {
    filter?: ReportFilter;
    maxResults?: number;
    nextToken?: string;
    reportGroupArn: string;
    sortOrder?: SortOrderTypeEnum;
}
