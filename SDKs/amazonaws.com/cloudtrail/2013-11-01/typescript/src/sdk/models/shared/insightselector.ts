import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightTypeEnum } from "./insighttypeenum";


// InsightSelector
/** 
 * A JSON string that contains a list of insight types that are logged on a trail.
**/
export class InsightSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightType" })
  insightType?: InsightTypeEnum;
}
