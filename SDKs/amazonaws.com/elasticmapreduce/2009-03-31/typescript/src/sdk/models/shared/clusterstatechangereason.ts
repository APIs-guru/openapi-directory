import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateChangeReasonCodeEnum } from "./clusterstatechangereasoncodeenum";



// ClusterStateChangeReason
/** 
 * The reason that the cluster changed to its current state.
**/
export class ClusterStateChangeReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: ClusterStateChangeReasonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
