import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateIp } from "./privateip";
import { SecurityGroup } from "./securitygroup";
/**
 * Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type.
**/
export declare class NetworkInterface extends SpeakeasyBase {
    ipv6Addresses?: string[];
    networkInterfaceId?: string;
    privateDnsName?: string;
    privateIpAddress?: string;
    privateIpAddresses?: PrivateIp[];
    publicDnsName?: string;
    publicIp?: string;
    securityGroups?: SecurityGroup[];
    subnetId?: string;
    vpcId?: string;
}
