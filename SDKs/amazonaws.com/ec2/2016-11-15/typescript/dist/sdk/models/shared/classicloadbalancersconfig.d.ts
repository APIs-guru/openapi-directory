import { SpeakeasyBase } from "../../../internal/utils";
import { ClassicLoadBalancer } from "./classicloadbalancer";
/**
 * Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.
**/
export declare class ClassicLoadBalancersConfig extends SpeakeasyBase {
    classicLoadBalancers?: ClassicLoadBalancer[];
}
