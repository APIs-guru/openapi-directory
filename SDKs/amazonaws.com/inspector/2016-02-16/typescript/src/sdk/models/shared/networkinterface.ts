import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrivateIp } from "./privateip";
import { SecurityGroup } from "./securitygroup";


// NetworkInterface
/** 
 * Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type.
**/
export class NetworkInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipv6Addresses" })
  ipv6Addresses?: string[];

  @Metadata({ data: "json, name=networkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "json, name=privateDnsName" })
  privateDnsName?: string;

  @Metadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;

  @Metadata({ data: "json, name=privateIpAddresses", elemType: shared.PrivateIp })
  privateIpAddresses?: PrivateIp[];

  @Metadata({ data: "json, name=publicDnsName" })
  publicDnsName?: string;

  @Metadata({ data: "json, name=publicIp" })
  publicIp?: string;

  @Metadata({ data: "json, name=securityGroups", elemType: shared.SecurityGroup })
  securityGroups?: SecurityGroup[];

  @Metadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
