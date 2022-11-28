import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightTypeEnum } from "./insighttypeenum";



// InsightSelector
/** 
 * A JSON string that contains a list of insight types that are logged on a trail.
**/
export class InsightSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightType" })
  insightType?: InsightTypeEnum;
}
