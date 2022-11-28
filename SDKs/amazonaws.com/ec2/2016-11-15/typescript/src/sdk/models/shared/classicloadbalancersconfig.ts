import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassicLoadBalancer } from "./classicloadbalancer";



// ClassicLoadBalancersConfig
/** 
 * Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.
**/
export class ClassicLoadBalancersConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ClassicLoadBalancer })
  classicLoadBalancers?: ClassicLoadBalancer[];
}
