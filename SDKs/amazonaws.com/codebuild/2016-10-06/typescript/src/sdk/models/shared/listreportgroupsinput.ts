import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportGroupSortByTypeEnum } from "./reportgroupsortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";



export class ListReportGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ReportGroupSortByTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
