import { SpeakeasyBase } from "../../../internal/utils";
import { ClassicLoadBalancersConfig } from "./classicloadbalancersconfig";
import { TargetGroupsConfig } from "./targetgroupsconfig";
/**
 * Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.
**/
export declare class LoadBalancersConfig extends SpeakeasyBase {
    classicLoadBalancersConfig?: ClassicLoadBalancersConfig;
    targetGroupsConfig?: TargetGroupsConfig;
}
