import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerState } from "./loadbalancerstate";



export class DescribeLoadBalancersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoadBalancerState })
  loadBalancers?: LoadBalancerState[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
