import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancer } from "./loadbalancer";
export declare class DescribeLoadBalancersOutput extends SpeakeasyBase {
    loadBalancers?: LoadBalancer[];
    nextMarker?: string;
}
