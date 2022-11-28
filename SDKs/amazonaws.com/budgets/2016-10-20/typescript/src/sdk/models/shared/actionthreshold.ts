import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThresholdTypeEnum } from "./thresholdtypeenum";



// ActionThreshold
/** 
 *  The trigger threshold of the action. 
**/
export class ActionThreshold extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionThresholdType" })
  actionThresholdType: ThresholdTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ActionThresholdValue" })
  actionThresholdValue: number;
}
