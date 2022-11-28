import { SpeakeasyBase } from "../../../internal/utils";
import { DnsEntry } from "./dnsentry";
import { SecurityGroupIdentifier } from "./securitygroupidentifier";
import { LastError } from "./lasterror";
import { StateEnum } from "./stateenum";
import { Tag } from "./tag";
import { VpcEndpointTypeEnum } from "./vpcendpointtypeenum";
/**
 * Describes a VPC endpoint.
**/
export declare class VpcEndpoint extends SpeakeasyBase {
    creationTimestamp?: Date;
    dnsEntries?: DnsEntry[];
    groups?: SecurityGroupIdentifier[];
    lastError?: LastError;
    networkInterfaceIds?: string[];
    ownerId?: string;
    policyDocument?: string;
    privateDnsEnabled?: boolean;
    requesterManaged?: boolean;
    routeTableIds?: string[];
    serviceName?: string;
    state?: StateEnum;
    subnetIds?: string[];
    tags?: Tag[];
    vpcEndpointId?: string;
    vpcEndpointType?: VpcEndpointTypeEnum;
    vpcId?: string;
}
