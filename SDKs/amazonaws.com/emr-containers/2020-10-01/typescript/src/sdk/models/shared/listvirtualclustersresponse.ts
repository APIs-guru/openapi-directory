import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualCluster } from "./virtualcluster";



export class ListVirtualClustersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualClusters", elemType: VirtualCluster })
  virtualClusters?: VirtualCluster[];
}
