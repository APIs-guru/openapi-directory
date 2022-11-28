import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAddress } from "./loadbalanceraddress";
/**
 * Information about an Availability Zone.
**/
export declare class AvailabilityZone extends SpeakeasyBase {
    loadBalancerAddresses?: LoadBalancerAddress[];
    outpostId?: string;
    subnetId?: string;
    zoneName?: string;
}
