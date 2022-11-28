import { SpeakeasyBase } from "../../../internal/utils";
import { DnsNameStateEnum } from "./dnsnamestateenum";
import { PrivateDnsDetails } from "./privatednsdetails";
import { ServiceTypeDetail } from "./servicetypedetail";
import { Tag } from "./tag";
/**
 * Describes a VPC endpoint service.
**/
export declare class ServiceDetail extends SpeakeasyBase {
    acceptanceRequired?: boolean;
    availabilityZones?: string[];
    baseEndpointDnsNames?: string[];
    managesVpcEndpoints?: boolean;
    owner?: string;
    privateDnsName?: string;
    privateDnsNameVerificationState?: DnsNameStateEnum;
    privateDnsNames?: PrivateDnsDetails[];
    serviceId?: string;
    serviceName?: string;
    serviceType?: ServiceTypeDetail[];
    tags?: Tag[];
    vpcEndpointPolicySupported?: boolean;
}
