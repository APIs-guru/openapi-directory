import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAttribute } from "./loadbalancerattribute";



export class DescribeLoadBalancerAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoadBalancerAttribute })
  attributes?: LoadBalancerAttribute[];
}
