import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoScalingPolicyStateEnum } from "./autoscalingpolicystateenum";
import { AutoScalingPolicyStateChangeReason } from "./autoscalingpolicystatechangereason";


// AutoScalingPolicyStatus
/** 
 * The status of an automatic scaling policy. 
**/
export class AutoScalingPolicyStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: AutoScalingPolicyStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: AutoScalingPolicyStateChangeReason;
}
