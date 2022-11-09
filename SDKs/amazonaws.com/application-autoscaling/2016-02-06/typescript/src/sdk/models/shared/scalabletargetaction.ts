import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScalableTargetAction
/** 
 * Represents the minimum and maximum capacity for a scheduled action.
**/
export class ScalableTargetAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=MinCapacity" })
  minCapacity?: number;
}
