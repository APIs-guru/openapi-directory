import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



// DescribeClusterOutput
/** 
 * This output contains the description of the cluster.
**/
export class DescribeClusterOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cluster" })
  cluster?: Cluster;
}
