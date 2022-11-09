import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualCluster } from "./virtualcluster";


export class DescribeVirtualClusterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=virtualCluster" })
  virtualCluster?: VirtualCluster;
}
