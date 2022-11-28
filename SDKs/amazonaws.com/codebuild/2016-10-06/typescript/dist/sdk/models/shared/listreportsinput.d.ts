import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFilter } from "./reportfilter";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListReportsInput extends SpeakeasyBase {
    filter?: ReportFilter;
    maxResults?: number;
    nextToken?: string;
    sortOrder?: SortOrderTypeEnum;
}
