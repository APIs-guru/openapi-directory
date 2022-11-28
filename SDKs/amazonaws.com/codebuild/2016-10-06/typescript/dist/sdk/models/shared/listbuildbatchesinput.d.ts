import { SpeakeasyBase } from "../../../internal/utils";
import { BuildBatchFilter } from "./buildbatchfilter";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class ListBuildBatchesInput extends SpeakeasyBase {
    filter?: BuildBatchFilter;
    maxResults?: number;
    nextToken?: string;
    sortOrder?: SortOrderTypeEnum;
}
