import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndTimeRange } from "./endtimerange";
import { InsightTypeEnum } from "./insighttypeenum";



// ListInsightsClosedStatusFilter
/** 
 *  Used to filter for insights that have the status <code>CLOSED</code>. 
**/
export class ListInsightsClosedStatusFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTimeRange" })
  endTimeRange: EndTimeRange;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: InsightTypeEnum;
}
