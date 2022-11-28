import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualCluster } from "./virtualcluster";
export declare class ListVirtualClustersResponse extends SpeakeasyBase {
    nextToken?: string;
    virtualClusters?: VirtualCluster[];
}
