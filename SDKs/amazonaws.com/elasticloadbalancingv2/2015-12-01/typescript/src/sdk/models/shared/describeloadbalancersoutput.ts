import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancer } from "./loadbalancer";



export class DescribeLoadBalancersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoadBalancer })
  loadBalancers?: LoadBalancer[];

  @SpeakeasyMetadata()
  nextMarker?: string;
}
