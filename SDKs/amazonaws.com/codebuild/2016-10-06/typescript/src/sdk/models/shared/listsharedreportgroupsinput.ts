import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SharedResourceSortByTypeEnum } from "./sharedresourcesortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";



export class ListSharedReportGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: SharedResourceSortByTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
