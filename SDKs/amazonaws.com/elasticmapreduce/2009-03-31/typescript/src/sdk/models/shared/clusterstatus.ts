import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";
import { ClusterStateChangeReason } from "./clusterstatechangereason";
import { ClusterTimeline } from "./clustertimeline";



// ClusterStatus
/** 
 * The detailed status of the cluster.
**/
export class ClusterStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ClusterStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: ClusterStateChangeReason;

  @SpeakeasyMetadata({ data: "json, name=Timeline" })
  timeline?: ClusterTimeline;
}
