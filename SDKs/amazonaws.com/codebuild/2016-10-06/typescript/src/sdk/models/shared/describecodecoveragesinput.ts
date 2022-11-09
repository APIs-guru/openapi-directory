import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportCodeCoverageSortByTypeEnum } from "./reportcodecoveragesortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";


export class DescribeCodeCoveragesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLineCoveragePercentage" })
  maxLineCoveragePercentage?: number;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=minLineCoveragePercentage" })
  minLineCoveragePercentage?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reportArn" })
  reportArn: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: ReportCodeCoverageSortByTypeEnum;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
