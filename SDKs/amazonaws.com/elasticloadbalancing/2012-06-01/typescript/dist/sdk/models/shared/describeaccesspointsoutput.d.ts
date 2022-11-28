import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerDescription } from "./loadbalancerdescription";
/**
 * Contains the parameters for DescribeLoadBalancers.
**/
export declare class DescribeAccessPointsOutput extends SpeakeasyBase {
    loadBalancerDescriptions?: LoadBalancerDescription[];
    nextMarker?: string;
}
