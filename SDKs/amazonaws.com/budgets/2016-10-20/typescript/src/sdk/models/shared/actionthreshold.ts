import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThresholdTypeEnum } from "./thresholdtypeenum";


// ActionThreshold
/** 
 *  The trigger threshold of the action. 
**/
export class ActionThreshold extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionThresholdType" })
  actionThresholdType: ThresholdTypeEnum;

  @Metadata({ data: "json, name=ActionThresholdValue" })
  actionThresholdValue: number;
}
