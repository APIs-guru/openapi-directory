import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetIpv6CidrBlockAssociation } from "./subnetipv6cidrblockassociation";
import { SubnetStateEnum } from "./subnetstateenum";
import { Tag } from "./tag";



// Subnet
/** 
 * Describes a subnet.
**/
export class Subnet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignIpv6AddressOnCreation?: boolean;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  availabilityZoneId?: string;

  @SpeakeasyMetadata()
  availableIpAddressCount?: number;

  @SpeakeasyMetadata()
  cidrBlock?: string;

  @SpeakeasyMetadata()
  customerOwnedIpv4Pool?: string;

  @SpeakeasyMetadata()
  defaultForAz?: boolean;

  @SpeakeasyMetadata({ elemType: SubnetIpv6CidrBlockAssociation })
  ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[];

  @SpeakeasyMetadata()
  mapCustomerOwnedIpOnLaunch?: boolean;

  @SpeakeasyMetadata()
  mapPublicIpOnLaunch?: boolean;

  @SpeakeasyMetadata()
  outpostArn?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: SubnetStateEnum;

  @SpeakeasyMetadata()
  subnetArn?: string;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
