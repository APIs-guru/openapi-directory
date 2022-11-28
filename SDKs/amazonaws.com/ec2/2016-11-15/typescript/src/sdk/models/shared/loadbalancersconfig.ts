import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassicLoadBalancersConfig } from "./classicloadbalancersconfig";
import { TargetGroupsConfig } from "./targetgroupsconfig";



// LoadBalancersConfig
/** 
 * Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.
**/
export class LoadBalancersConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  classicLoadBalancersConfig?: ClassicLoadBalancersConfig;

  @SpeakeasyMetadata()
  targetGroupsConfig?: TargetGroupsConfig;
}
