import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetGroupTuple
/** 
 * Information about how traffic will be distributed between multiple target groups in a forward rule.
**/
export class TargetGroupTuple extends SpeakeasyBase {
  @SpeakeasyMetadata()
  targetGroupArn?: string;

  @SpeakeasyMetadata()
  weight?: number;
}
