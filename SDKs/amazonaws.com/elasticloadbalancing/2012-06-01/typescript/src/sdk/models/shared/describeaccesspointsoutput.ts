import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerDescription } from "./loadbalancerdescription";



// DescribeAccessPointsOutput
/** 
 * Contains the parameters for DescribeLoadBalancers.
**/
export class DescribeAccessPointsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoadBalancerDescription })
  loadBalancerDescriptions?: LoadBalancerDescription[];

  @SpeakeasyMetadata()
  nextMarker?: string;
}
