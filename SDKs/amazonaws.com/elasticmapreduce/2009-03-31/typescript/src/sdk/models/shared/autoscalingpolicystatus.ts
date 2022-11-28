import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyStateEnum } from "./autoscalingpolicystateenum";
import { AutoScalingPolicyStateChangeReason } from "./autoscalingpolicystatechangereason";



// AutoScalingPolicyStatus
/** 
 * The status of an automatic scaling policy. 
**/
export class AutoScalingPolicyStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: AutoScalingPolicyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: AutoScalingPolicyStateChangeReason;
}
