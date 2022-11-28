import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerStateEnumEnum } from "./loadbalancerstateenumenum";
/**
 * Information about the state of the load balancer.
**/
export declare class LoadBalancerState extends SpeakeasyBase {
    code?: LoadBalancerStateEnumEnum;
    reason?: string;
}
