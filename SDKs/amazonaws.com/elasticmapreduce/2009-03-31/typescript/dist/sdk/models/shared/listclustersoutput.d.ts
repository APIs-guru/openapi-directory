import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterSummary } from "./clustersummary";
/**
 * This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.
**/
export declare class ListClustersOutput extends SpeakeasyBase {
    clusters?: ClusterSummary[];
    marker?: string;
}
