import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeClusterInput
/** 
 * This input determines which cluster to describe.
**/
export class DescribeClusterInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
