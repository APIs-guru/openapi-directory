import { SpeakeasyBase } from "../../../internal/utils";
import { BuildBatchFilter } from "./buildbatchfilter";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListBuildBatchesForProjectInput extends SpeakeasyBase {
    filter?: BuildBatchFilter;
    maxResults?: number;
    nextToken?: string;
    projectName?: string;
    sortOrder?: SortOrderTypeEnum;
}
