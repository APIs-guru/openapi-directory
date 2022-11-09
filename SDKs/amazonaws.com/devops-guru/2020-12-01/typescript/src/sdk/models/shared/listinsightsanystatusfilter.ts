import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StartTimeRange } from "./starttimerange";
import { InsightTypeEnum } from "./insighttypeenum";


// ListInsightsAnyStatusFilter
/** 
 *  Used to filter for insights that have any status. 
**/
export class ListInsightsAnyStatusFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=StartTimeRange" })
  startTimeRange: StartTimeRange;

  @Metadata({ data: "json, name=Type" })
  type: InsightTypeEnum;
}
