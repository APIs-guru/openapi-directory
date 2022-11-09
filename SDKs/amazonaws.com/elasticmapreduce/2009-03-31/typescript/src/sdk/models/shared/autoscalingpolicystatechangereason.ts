import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingPolicyStateChangeReasonCodeEnum } from "./autoscalingpolicystatechangereasoncodeenum";


// AutoScalingPolicyStateChangeReason
/** 
 * The reason for an <a>AutoScalingPolicyStatus</a> change.
**/
export class AutoScalingPolicyStateChangeReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: AutoScalingPolicyStateChangeReasonCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
