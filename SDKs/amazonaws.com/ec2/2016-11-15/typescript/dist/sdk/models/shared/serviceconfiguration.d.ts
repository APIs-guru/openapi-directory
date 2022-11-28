import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateDnsNameConfiguration } from "./privatednsnameconfiguration";
import { ServiceStateEnum } from "./servicestateenum";
import { ServiceTypeDetail } from "./servicetypedetail";
import { Tag } from "./tag";
/**
 * Describes a service configuration for a VPC endpoint service.
**/
export declare class ServiceConfiguration extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    availabilityZones?: string[];
    baseEndpointDnsNames?: string[];
    gatewayLoadBalancerArns?: string[];
    managesVpcEndpoints?: boolean;
    networkLoadBalancerArns?: string[];
    privateDnsName?: string;
    privateDnsNameConfiguration?: PrivateDnsNameConfiguration;
    serviceId?: string;
    serviceName?: string;
    serviceState?: ServiceStateEnum;
    serviceType?: ServiceTypeDetail[];
    tags?: Tag[];
}
