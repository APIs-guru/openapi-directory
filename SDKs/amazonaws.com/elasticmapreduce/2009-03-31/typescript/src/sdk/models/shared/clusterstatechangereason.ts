import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterStateChangeReasonCodeEnum } from "./clusterstatechangereasoncodeenum";


// ClusterStateChangeReason
/** 
 * The reason that the cluster changed to its current state.
**/
export class ClusterStateChangeReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: ClusterStateChangeReasonCodeEnum;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
