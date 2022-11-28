import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetHealthReasonEnumEnum } from "./targethealthreasonenumenum";
import { TargetHealthStateEnumEnum } from "./targethealthstateenumenum";



// TargetHealth
/** 
 * Information about the current health of a target.
**/
export class TargetHealth extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  reason?: TargetHealthReasonEnumEnum;

  @SpeakeasyMetadata()
  state?: TargetHealthStateEnumEnum;
}
