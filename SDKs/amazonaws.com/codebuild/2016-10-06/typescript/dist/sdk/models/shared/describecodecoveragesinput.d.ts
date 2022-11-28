import { SpeakeasyBase } from "../../../internal/utils";
import { ReportCodeCoverageSortByTypeEnum } from "./reportcodecoveragesortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";
export declare class DescribeCodeCoveragesInput extends SpeakeasyBase {
    maxLineCoveragePercentage?: number;
    maxResults?: number;
    minLineCoveragePercentage?: number;
    nextToken?: string;
    reportArn: string;
    sortBy?: ReportCodeCoverageSortByTypeEnum;
    sortOrder?: SortOrderTypeEnum;
}
