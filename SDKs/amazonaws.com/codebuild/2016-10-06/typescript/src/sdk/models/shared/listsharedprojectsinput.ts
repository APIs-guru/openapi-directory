import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SharedResourceSortByTypeEnum } from "./sharedresourcesortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";


export class ListSharedProjectsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: SharedResourceSortByTypeEnum;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
