import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeClusterInput
/** 
 * This input determines which cluster to describe.
**/
export class DescribeClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterId" })
  clusterId: string;
}
