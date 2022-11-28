import { SpeakeasyBase } from "../../../internal/utils";
import { EndTimeRange } from "./endtimerange";
import { InsightTypeEnum } from "./insighttypeenum";
/**
 *  Used to filter for insights that have the status <code>CLOSED</code>.
**/
export declare class ListInsightsClosedStatusFilter extends SpeakeasyBase {
    endTimeRange: EndTimeRange;
    type: InsightTypeEnum;
}
