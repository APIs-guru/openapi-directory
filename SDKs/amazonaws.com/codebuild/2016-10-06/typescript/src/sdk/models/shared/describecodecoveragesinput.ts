import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportCodeCoverageSortByTypeEnum } from "./reportcodecoveragesortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";



export class DescribeCodeCoveragesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxLineCoveragePercentage" })
  maxLineCoveragePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=minLineCoveragePercentage" })
  minLineCoveragePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reportArn" })
  reportArn: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ReportCodeCoverageSortByTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
