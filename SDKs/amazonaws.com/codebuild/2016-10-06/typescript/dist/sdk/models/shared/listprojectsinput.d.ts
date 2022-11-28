import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSortByTypeEnum } from "./projectsortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListProjectsInput extends SpeakeasyBase {
    nextToken?: string;
    sortBy?: ProjectSortByTypeEnum;
    sortOrder?: SortOrderTypeEnum;
}
