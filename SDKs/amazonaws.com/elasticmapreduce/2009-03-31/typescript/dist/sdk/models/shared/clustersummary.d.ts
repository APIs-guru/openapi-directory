import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterStatus } from "./clusterstatus";
/**
 * The summary description of the cluster.
**/
export declare class ClusterSummary extends SpeakeasyBase {
    clusterArn?: string;
    id?: string;
    name?: string;
    normalizedInstanceHours?: number;
    outpostArn?: string;
    status?: ClusterStatus;
}
