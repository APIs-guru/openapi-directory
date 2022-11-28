import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a static IP address for a load balancer.
**/
export declare class LoadBalancerAddress extends SpeakeasyBase {
    allocationId?: string;
    iPv6Address?: string;
    ipAddress?: string;
    privateIPv4Address?: string;
}
