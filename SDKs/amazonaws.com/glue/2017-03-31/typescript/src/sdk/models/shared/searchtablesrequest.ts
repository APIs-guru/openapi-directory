import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyPredicate } from "./propertypredicate";
import { ResourceShareTypeEnum } from "./resourcesharetypeenum";
import { SortCriterion } from "./sortcriterion";



export class SearchTablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: PropertyPredicate })
  filters?: PropertyPredicate[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceShareType" })
  resourceShareType?: ResourceShareTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SearchText" })
  searchText?: string;

  @SpeakeasyMetadata({ data: "json, name=SortCriteria", elemType: SortCriterion })
  sortCriteria?: SortCriterion[];
}
