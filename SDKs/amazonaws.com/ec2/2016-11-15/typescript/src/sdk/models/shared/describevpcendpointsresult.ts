import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";



// DescribeVpcEndpointsResult
/** 
 * Contains the output of DescribeVpcEndpoints.
**/
export class DescribeVpcEndpointsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: VpcEndpoint })
  vpcEndpoints?: VpcEndpoint[];
}
