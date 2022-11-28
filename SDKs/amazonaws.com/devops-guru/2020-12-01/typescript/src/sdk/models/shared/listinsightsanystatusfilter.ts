import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartTimeRange } from "./starttimerange";
import { InsightTypeEnum } from "./insighttypeenum";



// ListInsightsAnyStatusFilter
/** 
 *  Used to filter for insights that have any status. 
**/
export class ListInsightsAnyStatusFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StartTimeRange" })
  startTimeRange: StartTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: InsightTypeEnum;
}
