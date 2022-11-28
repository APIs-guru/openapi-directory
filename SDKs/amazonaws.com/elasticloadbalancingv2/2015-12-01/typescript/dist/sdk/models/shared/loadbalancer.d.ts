import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { LoadBalancerSchemeEnumEnum } from "./loadbalancerschemeenumenum";
import { LoadBalancerState } from "./loadbalancerstate";
import { LoadBalancerTypeEnumEnum } from "./loadbalancertypeenumenum";
/**
 * Information about a load balancer.
**/
export declare class LoadBalancer extends SpeakeasyBase {
    availabilityZones?: AvailabilityZone[];
    canonicalHostedZoneId?: string;
    createdTime?: Date;
    customerOwnedIpv4Pool?: string;
    dnsName?: string;
    ipAddressType?: IpAddressTypeEnum;
    loadBalancerArn?: string;
    loadBalancerName?: string;
    scheme?: LoadBalancerSchemeEnumEnum;
    securityGroups?: string[];
    state?: LoadBalancerState;
    type?: LoadBalancerTypeEnumEnum;
    vpcId?: string;
}
