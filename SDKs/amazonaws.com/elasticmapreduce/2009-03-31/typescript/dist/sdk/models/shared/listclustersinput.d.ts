import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";
/**
 * This input determines how the ListClusters action filters the list of clusters that it returns.
**/
export declare class ListClustersInput extends SpeakeasyBase {
    clusterStates?: ClusterStateEnum[];
    createdAfter?: Date;
    createdBefore?: Date;
    marker?: string;
}
