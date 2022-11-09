import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndTimeRange } from "./endtimerange";
import { InsightTypeEnum } from "./insighttypeenum";


// ListInsightsClosedStatusFilter
/** 
 *  Used to filter for insights that have the status <code>CLOSED</code>. 
**/
export class ListInsightsClosedStatusFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTimeRange" })
  endTimeRange: EndTimeRange;

  @Metadata({ data: "json, name=Type" })
  type: InsightTypeEnum;
}
