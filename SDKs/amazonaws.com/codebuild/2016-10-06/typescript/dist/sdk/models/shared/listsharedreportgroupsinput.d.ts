import { SpeakeasyBase } from "../../../internal/utils";
import { SharedResourceSortByTypeEnum } from "./sharedresourcesortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListSharedReportGroupsInput extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    sortBy?: SharedResourceSortByTypeEnum;
    sortOrder?: SortOrderTypeEnum;
}
