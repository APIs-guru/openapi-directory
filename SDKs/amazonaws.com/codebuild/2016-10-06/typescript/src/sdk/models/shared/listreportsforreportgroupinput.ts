import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportFilter } from "./reportfilter";
import { SortOrderTypeEnum } from "./sortordertypeenum";


export class ListReportsForReportGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: ReportFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reportGroupArn" })
  reportGroupArn: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
