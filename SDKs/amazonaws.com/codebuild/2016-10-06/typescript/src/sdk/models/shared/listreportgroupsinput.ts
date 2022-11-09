import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportGroupSortByTypeEnum } from "./reportgroupsortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";


export class ListReportGroupsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: ReportGroupSortByTypeEnum;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
