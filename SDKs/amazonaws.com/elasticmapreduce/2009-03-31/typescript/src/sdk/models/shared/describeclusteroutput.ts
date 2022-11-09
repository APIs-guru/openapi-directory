import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cluster } from "./cluster";


// DescribeClusterOutput
/** 
 * This output contains the description of the cluster.
**/
export class DescribeClusterOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cluster" })
  cluster?: Cluster;
}
