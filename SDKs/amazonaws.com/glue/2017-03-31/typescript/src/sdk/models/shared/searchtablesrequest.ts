import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyPredicate } from "./propertypredicate";
import { ResourceShareTypeEnum } from "./resourcesharetypeenum";
import { SortCriterion } from "./sortcriterion";


export class SearchTablesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=Filters", elemType: shared.PropertyPredicate })
  filters?: PropertyPredicate[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceShareType" })
  resourceShareType?: ResourceShareTypeEnum;

  @Metadata({ data: "json, name=SearchText" })
  searchText?: string;

  @Metadata({ data: "json, name=SortCriteria", elemType: shared.SortCriterion })
  sortCriteria?: SortCriterion[];
}
