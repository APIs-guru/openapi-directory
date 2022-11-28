import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyStateChangeReasonCodeEnum } from "./autoscalingpolicystatechangereasoncodeenum";



// AutoScalingPolicyStateChangeReason
/** 
 * The reason for an <a>AutoScalingPolicyStatus</a> change.
**/
export class AutoScalingPolicyStateChangeReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: AutoScalingPolicyStateChangeReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
