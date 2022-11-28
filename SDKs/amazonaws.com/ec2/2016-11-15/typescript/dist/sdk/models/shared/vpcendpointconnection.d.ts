import { SpeakeasyBase } from "../../../internal/utils";
import { DnsEntry } from "./dnsentry";
import { StateEnum } from "./stateenum";
/**
 * Describes a VPC endpoint connection to a service.
**/
export declare class VpcEndpointConnection extends SpeakeasyBase {
    creationTimestamp?: Date;
    dnsEntries?: DnsEntry[];
    gatewayLoadBalancerArns?: string[];
    networkLoadBalancerArns?: string[];
    serviceId?: string;
    vpcEndpointId?: string;
    vpcEndpointOwner?: string;
    vpcEndpointState?: StateEnum;
}
