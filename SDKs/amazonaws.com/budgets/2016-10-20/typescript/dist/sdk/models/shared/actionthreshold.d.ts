import { SpeakeasyBase } from "../../../internal/utils";
import { ThresholdTypeEnum } from "./thresholdtypeenum";
/**
 *  The trigger threshold of the action.
**/
export declare class ActionThreshold extends SpeakeasyBase {
    actionThresholdType: ThresholdTypeEnum;
    actionThresholdValue: number;
}
