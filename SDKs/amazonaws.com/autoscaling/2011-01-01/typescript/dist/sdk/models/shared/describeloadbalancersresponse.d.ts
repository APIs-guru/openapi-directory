import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerState } from "./loadbalancerstate";
export declare class DescribeLoadBalancersResponse extends SpeakeasyBase {
    loadBalancers?: LoadBalancerState[];
    nextToken?: string;
}
