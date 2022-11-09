import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightTypeEnum } from "./insighttypeenum";


// ListInsightsOngoingStatusFilter
/** 
 *  Used to filter for insights that have the status <code>ONGOING</code>. 
**/
export class ListInsightsOngoingStatusFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type: InsightTypeEnum;
}
