import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";
import { ClusterStateChangeReason } from "./clusterstatechangereason";
import { ClusterTimeline } from "./clustertimeline";
/**
 * The detailed status of the cluster.
**/
export declare class ClusterStatus extends SpeakeasyBase {
    state?: ClusterStateEnum;
    stateChangeReason?: ClusterStateChangeReason;
    timeline?: ClusterTimeline;
}
