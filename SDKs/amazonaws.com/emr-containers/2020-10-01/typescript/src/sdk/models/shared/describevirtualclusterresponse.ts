import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualCluster } from "./virtualcluster";



export class DescribeVirtualClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualCluster" })
  virtualCluster?: VirtualCluster;
}
