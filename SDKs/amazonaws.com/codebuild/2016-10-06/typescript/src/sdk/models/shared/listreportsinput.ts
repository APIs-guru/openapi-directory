import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFilter } from "./reportfilter";
import { SortOrderTypeEnum } from "./sortordertypeenum";



export class ListReportsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: ReportFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
