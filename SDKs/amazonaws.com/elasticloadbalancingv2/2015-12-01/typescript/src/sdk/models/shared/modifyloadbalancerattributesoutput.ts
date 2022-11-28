import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAttribute } from "./loadbalancerattribute";



export class ModifyLoadBalancerAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoadBalancerAttribute })
  attributes?: LoadBalancerAttribute[];
}
