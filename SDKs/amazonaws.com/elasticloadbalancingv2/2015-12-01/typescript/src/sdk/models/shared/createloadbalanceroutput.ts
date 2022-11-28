import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancer } from "./loadbalancer";



export class CreateLoadBalancerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoadBalancer })
  loadBalancers?: LoadBalancer[];
}
