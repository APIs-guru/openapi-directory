import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterStateEnum } from "./clusterstateenum";
import { ClusterStateChangeReason } from "./clusterstatechangereason";
import { ClusterTimeline } from "./clustertimeline";


// ClusterStatus
/** 
 * The detailed status of the cluster.
**/
export class ClusterStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=State" })
  state?: ClusterStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: ClusterStateChangeReason;

  @Metadata({ data: "json, name=Timeline" })
  timeline?: ClusterTimeline;
}
