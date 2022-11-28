import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyPredicate } from "./propertypredicate";
import { ResourceShareTypeEnum } from "./resourcesharetypeenum";
import { SortCriterion } from "./sortcriterion";
export declare class SearchTablesRequest extends SpeakeasyBase {
    catalogId?: string;
    filters?: PropertyPredicate[];
    maxResults?: number;
    nextToken?: string;
    resourceShareType?: ResourceShareTypeEnum;
    searchText?: string;
    sortCriteria?: SortCriterion[];
}
