import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VirtualCluster } from "./virtualcluster";


export class ListVirtualClustersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=virtualClusters", elemType: shared.VirtualCluster })
  virtualClusters?: VirtualCluster[];
}
