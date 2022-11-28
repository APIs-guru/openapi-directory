import { SpeakeasyBase } from "../../../internal/utils";
import { StartTimeRange } from "./starttimerange";
import { InsightTypeEnum } from "./insighttypeenum";
/**
 *  Used to filter for insights that have any status.
**/
export declare class ListInsightsAnyStatusFilter extends SpeakeasyBase {
    startTimeRange: StartTimeRange;
    type: InsightTypeEnum;
}
