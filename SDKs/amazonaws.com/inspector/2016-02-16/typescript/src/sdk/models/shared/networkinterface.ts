import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrivateIp } from "./privateip";
import { SecurityGroup } from "./securitygroup";



// NetworkInterface
/** 
 * Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type.
**/
export class NetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipv6Addresses" })
  ipv6Addresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=networkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=privateDnsName" })
  privateDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=privateIpAddress" })
  privateIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=privateIpAddresses", elemType: PrivateIp })
  privateIpAddresses?: PrivateIp[];

  @SpeakeasyMetadata({ data: "json, name=publicDnsName" })
  publicDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=publicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=securityGroups", elemType: SecurityGroup })
  securityGroups?: SecurityGroup[];

  @SpeakeasyMetadata({ data: "json, name=subnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId?: string;
}
