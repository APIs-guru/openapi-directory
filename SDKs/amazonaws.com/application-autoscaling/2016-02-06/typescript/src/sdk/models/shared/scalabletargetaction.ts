import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScalableTargetAction
/** 
 * Represents the minimum and maximum capacity for a scheduled action.
**/
export class ScalableTargetAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=MinCapacity" })
  minCapacity?: number;
}
