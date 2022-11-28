import { SpeakeasyBase } from "../../../internal/utils";
import { ReportGroupSortByTypeEnum } from "./reportgroupsortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListReportGroupsInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    sortBy?: ReportGroupSortByTypeEnum;
    sortOrder?: SortOrderTypeEnum;
}
