import { SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { TaskDefinitionStatusEnum } from "./taskdefinitionstatusenum";
export declare class ListTaskDefinitionsRequest extends SpeakeasyBase {
    familyPrefix?: string;
    maxResults?: number;
    nextToken?: string;
    sort?: SortOrderEnum;
    status?: TaskDefinitionStatusEnum;
}
